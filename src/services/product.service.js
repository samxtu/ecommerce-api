// Utils
import catchAsync from '../utils/catchAsync';
import dataUri from '../utils/datauri';
import APIFeatures from '../utils/apiFeatures';
import { uploadFile, destroyFile } from '../utils/cloudinary';

// Model
import { Product, Specification, Attribute, Option } from '../models/index';

/**
 * @desc    Query products
 * @param   { Object } req - Request object
 * @returns { Object<type|message|statusCode|products> }
 */
export const queryProducts = catchAsync(async (req) => {
  const populateQuery = [
    { path: 'specification', select: 'specification' },
    { path: 'attribute', select: 'attribute' }
  ];

  const products = await APIFeatures(req, Product, populateQuery);
  console.log("products zenyewe: ",products);
  // 1) Check if products doesn't exist
  if (products.length === 0) {
    return {
      type: 'Error',
      message: 'noProductsFound',
      statusCode: 404
    };
  }

  // 3) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulProductsFound',
    statusCode: 200,
    products
  };
});

/**
 * @desc    Query Product Using It's ID
 * @param   { String } productId - Product ID
 * @returns { Object<type|message|statusCode|product> }
 */
export const queryProductById = catchAsync(async (productId) => {
  const populateQuery = [
    { path: 'specifications', select: 'specification' },
    { path: 'attributes', select: 'attribute' }
  ];

  const product = await Product.findById(productId)
    .populate(populateQuery)
    .lean();

  // 1) Check if product doesn't exist
  if (!product) {
    return {
      type: 'Error',
      message: 'noProductFound',
      statusCode: 404
    };
  }

  // someday, we will populate options here

  // 2) If everything is OK, send product
  return {
    type: 'Success',
    message: 'successfulProductFound',
    statusCode: 200,
    product
  };
});

/**
 * @desc    Create new product
 * @param   { Object } body - Body object data
 * @param   { Object } files - Product images
 * @param   { String } seller - Product seller ID
 * @returns { Object<type|message|statusCode|product> }
 */
export const createProduct = catchAsync(async (body, files, seller) => {
  const {
    name,
    description,
    category,
    price,
    priceDiscount,
    attributes,
    specifications,
    details,
    quantity,
    sold,
    isOutOfStock
  } = body;

  const mainImage = files.filter((image) => image.fieldname === 'mainImage');
  const images = files.filter((image) => image.fieldname === 'images');

  // 1) Check if there any empty field
  if (
    !name ||
    !description ||
    !details ||
    !category ||
    !price ||
    !priceDiscount ||
    !quantity ||
    !sold ||
    !isOutOfStock ||
    mainImage.length === 0
  ) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  if (
    body.wholeSale &&
    (!body.wholeSaleRange || !body.wholeSaleLimit || !body.wholeSalePrice)
  ) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const folderName = `Products/${name.trim().split(' ').join('')}`;

  // 2) Upload images to cloudinary
  const imagesPromises = images.map((image) =>
    uploadFile(dataUri(image).content, folderName)
  );
  const imagesResult = await Promise.all(imagesPromises);
  const imageResult = await uploadFile(
    dataUri(mainImage[0]).content,
    folderName
  );

  const imagesLink = [];
  const imagesId = [];

  // 3) Push images links & images IDs to the arrays
  imagesResult.forEach((image) => {
    imagesLink.push(image.secure_url);
    imagesId.push(image.public_id);
  });

  let priceAfterDiscount = Number(price);

  if (priceDiscount !== 0) {
    priceAfterDiscount =
      Number(price) - (Number(price) / 100) * Number(priceDiscount);
  }

  // 4) Create product
  let product = await Product.create({
    mainImage: imageResult.secure_url,
    mainImageId: imageResult.public_id,
    images: imagesLink,
    imagesId,
    name,
    description,
    details,
    category,
    price: Number(price),
    priceAfterDiscount,
    priceDiscount: Number(priceDiscount),
    seller,
    quantity: Number(quantity),
    sold: Number(sold),
    isOutOfStock
  });

  // 5) Convert specifications and Attributes string into an array
  // we dont need below as we will receive specifications and attributes as array
  // const specificationsArray = specifications.split(',').map((specification) => specification.trim());
  // const attributesArray = attributes.split(',').map((attribute) => attribute.trim());

  const attributesDocIds = [];
  const specificationsDocIds = [];

  /*
    6) Map through the specifications and attributes array and check if there is a specification or attribute document already exist in the specifications or attributes collection.

    If there is no document then create new one and push it's id into the specificationsDocIds array or into the attributesDocIds array.

    If the specification or attributes document already exist then push the document id into the specificationsDocIds or attributesDocIds array and push the product id into the specification or attributes document product field and then save the document updates.

    I used Promise.all with map cause it turns an array of promises into a single promise that, if things work, resolves into the array you want.
  */
  await Promise.all(
    specifications.map(async (specification) => {
      let optionsDocIds = [];
      const specificationDocument = await Specification.findOne({
        name: specification.name
      });

      if (!specificationDocument) {
        const newSpecification = await Specification.create({
          product: product.id,
          name: specification.name
        });
        specification.options.map(async (opt) => {
          const newOption = await Option.create({
            product: product.id,
            specification: newSpecification.id,
            value: opt
          });
          optionsDocIds.push(newOption.id);
        });
        specificationsDocIds.push(newSpecification.id);
        newSpecification.option = optionsDocIds;
        await newSpecification.save();
      } else {
        specificationsDocIds.push(specificationDocument.id);
        specificationDocument.product.push(product.id);
        specification.options.map(async (opt) => {
          const optionDocument = await Option.find({
            specification: specificationDocument.id,
            value: opt
          });
          if (!optionDocument) {
            const newOption = await Option.create({
              product: product.id,
              specification: specificationDocument.id,
              value: opt
            });
            specificationDocument.option.push(newOption.id);
          } else {
            optionDocument.product.push(product.id);
            await optionDocument.save();
          }
        });
        await specificationDocument.save();
      }
    })
  );

  await Promise.all(
    attributes.map(async (attribute) => {
      const attributeDocument = await Attribute.findOne({
        name: attribute.name,
        value: attribute.value
      });

      if (!attributeDocument) {
        const newAttribute = await Attribute.create({
          product: product.id,
          name: attribute.name,
          value: attribute.value
        });
        attributesDocIds.push(newAttribute.id);
      } else {
        attributesDocIds.push(attributeDocument.id);
        attributeDocument.product.push(product.id);
        await attributeDocument.save();
      }
    })
  );

  // 7) Update Product specifications and attributes fields with the new array of specification ids and attribute ids
  product.specification = specificationsDocIds;
  product.attribute = attributesDocIds;
  if (body.wholeSale) {
    product.wholeSale = body.wholeSale;
    product.wholeSaleLimit = body.wholeSaleLimit;
    product.wholeSalePrice = body.wholeSalePrice;
    product.wholeSaleRange = body.wholeSaleRange;
  }
  await product.save();
  // 8) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulProductCreate',
    statusCode: 201,
    product
  };
});

/**
 * @desc    Update Product Details
 * @param   { Object } body - Body object data
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @returns { Object<type|message|statusCode|product> }
 */
export const updateProductDetails = catchAsync(
  async (productId, sellerId, body) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 2) Check if user isn't the owner of product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    // 3) Check if user try to update specifications or attributes fields
    if (body.specifications || body.attributes) {
      return {
        type: 'Error',
        message: 'notSpecificationOrAttributesRoute',
        statusCode: 401
      };
    }

    // 3) Update product by it's ID
    const result = await Product.findByIdAndUpdate(productId, body, {
      new: true,
      runValidators: true
    });

    // 4) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulProductDetails',
      statusCode: 200,
      result
    };
  }
);

/**
 * @desc    Update Product Specification
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { String } specification - Product specification
 * @returns { Object<type|message|statusCode|specification> }
 */
export const addProductSpecification = catchAsync(
  async (productId, sellerId, specification) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 2) Check if user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    let specificationDocument = await Specification.findOne({
      product: productId,
      name: specification.name
    });

    // 3) Check if specification already exist
    if (specificationDocument) {
      let newOptionsDocIds = [];
      // check if all options are there
      specification.options.map(async (opt) => {
        const optionDocument = await Option.findOne({
          product: productId,
          specification: specificationDocument.id,
          value: opt
        });
        if (!optionDocument) {
          const newOption = await Option.create({
            product: productId,
            specification: specificationDocument.id,
            value: opt
          });
          specificationDocument.option.push(newOption.id);
          newOptionsDocIds.push(newOption.id);
        }
      });
      if (newOptionsDocIds.length > 0)
        return {
          type: 'Success',
          message: 'optionsAdded',
          statusCode: 200
        };
      return {
        type: 'Error',
        message: 'specificationExists',
        statusCode: 401
      };
    }
    let optionsDocIds = [];
    // 4) Create new specification
    specificationDocument = await Specification.create({
      product: productId,
      name: specification.name
    });
    specification.options.map(async (opt) => {
      const newOption = await Option.create({
        product: product.id,
        specification: newSpecification.id,
        value: opt
      });
      optionsDocIds.push(newOption.id);
    });

    specificationDocument.option = optionsDocIds;

    product.specification.push(specificationDocument.id);
    await specificationDocument.save();
    await product.save();

    // 5) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulAddProductSpecification',
      statusCode: 200,
      specification: specificationDocument
    };
  }
);

/**
 * @desc    Update Product Attribute
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { String } attribute - Product Attribute
 * @returns { Object<type|message|statusCode|attribute> }
 */
export const addProductAttribute = catchAsync(
  async (productId, sellerId, attribute) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 2) Check if user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    let attributeDocument = await Attribute.findOne({
      name: attribute.name,
      value: attribute.value
    });
    let attributeContains = false;

    // 3) Check if Attribute already exist
    if (attributeDocument) {
      attributeDocument.product.forEach((prod) => {
        if (prod === productId) attributeContains = true;
      });
      if (attributeContains)
        return {
          type: 'Error',
          message: 'attributeExists',
          statusCode: 401
        };
      // edit existing attribute to contain this product
      attributeDocument.product.push(productId);
      await attributeDocument.save();
    } else {
      // 4) Create new Attribute
      attributeDocument = await Attribute.create({
        product: productId,
        name: attribute.name,
        value: attribute.value
      });
    }
    product.attribute.push(attributeDocument.id);

    await product.save();

    // 5) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulAddProductAttribute',
      statusCode: 200,
      attribute: attributeDocument
    };
  }
);

/**
 * @desc    Delete Product Specification
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { String } specification - Product specification
 * @returns { Object<type|message|statusCode> }
 */
export const deleteProductSpecification = catchAsync(
  async (productId, sellerId, specification) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 2) Check if user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    const specificationDocument = await Specification.findOne({
      product: productId,
      name: specification.name
    });

    // 3) Check if specification doesn't exist
    if (!specificationDocument) {
      return {
        type: 'Error',
        message: 'noSpecificationExists',
        statusCode: 404
      };
    }

    product.specification = product.specification.filter(
      (item) => item !== specificationDocument.id
    );
    specificationDocument.product = specificationDocument.product.filter(
      (item) => item !== productId
    );

    const optionsDocument = await Option.find({
      product: productId,
      specification: specification.id
    });
    if (optionsDocument)
      await Promise.all(
        optionsDocument.forEach(async (opt) => {
          opt.product = opt.product.filter((item) => item !== productId);
          await opt.save();
        })
      );

    await product.save();

    // 4) Delete specification by removing that product from that specification
    await specificationDocument.save();

    // 5) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulDeleteProductSpecification',
      statusCode: 200
    };
  }
);

/**
 * @desc    Delete Product Attribute
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { String } attribute - Product Attribute
 * @returns { Object<type|message|statusCode> }
 */
export const deleteProductAttribute = catchAsync(
  async (productId, sellerId, attribute) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 2) Check if user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    const attributeDocument = await Attribute.findOne({
      product: productId,
      name: attribute.name,
      value: attribute.value
    });

    // 3) Check if Attribute doesn't exist
    if (!attributeDocument) {
      return {
        type: 'Error',
        message: 'noAttributeExists',
        statusCode: 404
      };
    }

    product.attribute = product.attribute.filter(
      (item) => item !== attributeDocument.id
    );

    await product.save();

    // 4) Delete Attribute
    if (attributeDocument.product.length === 1)
      await Attribute.findOneAndDelete({
        product: productId,
        name: attribute.name,
        value: attribute.value
      });
    attributeDocument.product = attributeDocument.product.filter(
      (item) => item !== productId
    );

    await attributeDocument.save();

    // 5) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulDeleteProductAttribute',
      statusCode: 200
    };
  }
);

/**
 * @desc    Update Product Main Image
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { Object } image - Product main image
 * @returns { Object<type|message|statusCode|product> }
 */
export const updateProductMainImage = catchAsync(
  async (productId, sellerId, image) => {
    // 1) Check if image provided
    if (image.length === 0) {
      return {
        type: 'Error',
        message: 'selectImage',
        statusCode: 400
      };
    }

    const product = await Product.findById(productId);

    // 2) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 3) Check if the user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    let mainImage = image.filter((img) => img.fieldname === 'mainImage');

    const folderName = `Products/${product.name.trim().split(' ').join('')}`;
    const productMainImageID = product.mainImageId;

    // 4) Destroy Image
    destroyFile(productMainImageID);

    // 5) Upload image to cloudinary
    mainImage = await uploadFile(
      dataUri(mainImage[0]).content,
      folderName,
      600
    );

    const productBody = {
      mainImage: mainImage.secure_url,
      mainImageId: mainImage.public_id
    };

    // 6) Update product using it's ID
    await Product.findByIdAndUpdate(productId, productBody, {
      new: true,
      runValidators: true
    });

    // 7) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulProductMainImage',
      statusCode: 200
    };
  }
);

/**
 * @desc    Update Product Images
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @param   { Object } images - Product images
 * @returns { Object<type|message|statusCode|product> }
 */
export const updateProductImages = catchAsync(
  async (productId, sellerId, images) => {
    // 1) Check if images provided
    if (images.length === 0) {
      return {
        type: 'Error',
        message: 'selectImages',
        statusCode: 400
      };
    }

    const product = await Product.findById(productId);

    // 2) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    // 3) Check if user isn't the owner of the product
    if (sellerId.toString() !== product.seller.toString()) {
      return {
        type: 'Error',
        message: 'notSeller',
        statusCode: 403
      };
    }

    images = images.filter((image) => image.fieldname === 'images');

    const folderName = `Products/${product.name.trim().split(' ').join('')}`;
    const imagesLinks = [];
    const imagesIDs = [];
    const productImagesID = product.imagesId;

    // 4) Destroy Image
    productImagesID.forEach((image) => destroyFile(image));

    // 5) Upload images to cloudinary
    const imagesPromises = images.map((image) =>
      uploadFile(dataUri(image).content, folderName, 600)
    );

    const imagesResult = await Promise.all(imagesPromises);

    // 6) Push images links & IDs to the arrays
    imagesResult.forEach((image) => {
      imagesLinks.push(image.secure_url);
      imagesIDs.push(image.public_id);
    });

    const productBody = {
      images: imagesLinks,
      ImagesId: imagesIDs
    };

    // 7) Update product using it's ID
    await Product.findByIdAndUpdate(productId, productBody, {
      new: true,
      runValidators: true
    });

    // 8) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulProductSubImages',
      statusCode: 200
    };
  }
);

/**
 * @desc    Delete Product Using It's ID
 * @param   { String } productId - Product ID
 * @param   { String } sellerId - Seller ID
 * @returns { Object<type|message|statusCode> }
 */
export const deleteProduct = catchAsync(async (productId, sellerId) => {
  const product = await Product.findById(productId);

  // 1) Check if product doesn't exist
  if (!product) {
    return {
      type: 'Error',
      message: `noProductFound`,
      statusCode: 404
    };
  }

  // 2) Check if user isn't the owner of the product
  if (sellerId.toString() !== product.seller.toString()) {
    return {
      type: 'Error',
      message: 'notSeller',
      statusCode: 403
    };
  }

  // 3) Delete product using it's ID
  await Product.findByIdAndDelete(productId);

  // 4) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulProductDelete',
    statusCode: 200
  };
});

/**
 * @desc    Get Products Statics
 * @return  { Array<Stats> }
 */
export const getProductStats = catchAsync(async () => {
  const stats = await Product.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: '$category',
        'Number Of Products': { $sum: 1 },
        'Number Of Ratings': { $sum: '$ratingsQuantity' },
        'Average Rating': { $avg: '$ratingsAverage' },
        'Average Price': { $avg: '$price' },
        'Minimum Price': { $min: '$price' },
        'Maximum Price': { $max: '$price' },
        Quantity: { $sum: '$quantity' }
      }
    },
    {
      $lookup: {
        from: 'categories',
        localField: '_id',
        foreignField: '_id',
        as: 'Category'
      }
    },
    {
      $unwind: '$Category'
    },
    {
      $project: {
        _id: 0,
        'Number Of Products': 1,
        'Number Of Ratings': 1,
        'Average Rating': 1,
        'Average Price': 1,
        'Minimum Price': 1,
        'Maximum Price': 1,
        Quantity: 1,
        Category: {
          name: 1
        }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
  ]);

  return stats;
});
