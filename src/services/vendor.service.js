// Utils
import catchAsync from '../utils/catchAsync';
import APIFeatures from '../utils/apiFeatures';
import dataUri from '../utils/datauri';
import { uploadFile, destroyFile } from '../utils/cloudinary';

// Models
import { Vendor, User } from '../models/index';

/**
 * @docs    Create New Vendor
 * @param   { Object } body - Body object data
 * @param   { Object } logo - Vendor logo
 * @returns { Object<type|message|statusCode|vendor> }
 */
export const createVendor = catchAsync(async (body, logo, user) => {
  // 1) Check if logo image provided
  if (logo === undefined) {
    return {
      type: 'Error',
      message: 'logoRequired',
      statusCode: 400
    };
  }

  const { name, title, email, phone, location, about } = body;

  // 2) Check required fields
  if (
    !name ||
    !title ||
    !email ||
    !phone ||
    !location ||
    !about ||
    logo.length === 0
  ) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const isEmailTaken = await Vendor.isEmailTaken(email);

  // 3) Check if email already taken
  if (isEmailTaken) {
    return {
      type: 'Error',
      message: 'emailTaken',
      statusCode: 409
    };
  }

  // 4) Specifiy folder name where the images are going to be uploaded in cloudinary
  const folderName = `Vendors/Logo/${name.trim().split(' ').join('')}`;

  // 5) Upload image to cloudinary
  const image = await uploadFile(
    dataUri(profileImage).content,
    folderName,
    600
  );

  // 6) Create new vendor
  const vendor = await Vendor.create({
    name,
    title,
    email,
    phone,
    location,
    about,
    logo: image.secure_url,
    logoId: image.public_id,
    user,
    users: [user]
  });

  //7) Update the user role to seller and add vendor reference to user
  user = await User.findByIdAndUpdate(id, {
    role: 'seller',
    vendor: vendor.id
  }, {
    new: true,
    runValidators: true
  });
  // 8) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulVendorCreation',
    statusCode: 201,
    vendor
  };
});

/**
 * @desc    Query Vendors
 * @param   { Object } req - Request object
 * @returns { Object<type|message|statusCode|vendors> }
 */
export const queryVendors = catchAsync(async (req) => {
  const vendors = await APIFeatures(req, Vendor);

  // 1) Check if vendors doesn't exist
  if (vendors.length === 0) {
    return {
      type: 'Error',
      message: 'noVendorsFound',
      statusCode: 404
    };
  }

  // 2) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulVendorsFound',
    statusCode: 200,
    users
  };
});

/**
 * @desc    Query Vendor Using It's ID
 * @param   { Object } id - Vendor ID
 * @return  { Object<type|message|statusCode|vendor> }
 */
export const queryVendor = catchAsync(async (id) => {
  const vendor = await Vendor.findById(id);

  // 1) Check if vendor doesn't exist
  if (!vendor) {
    return {
      type: 'Error',
      message: 'noVendorFoundWithID',
      statusCode: 404
    };
  }

  // 2) If everything is OK, send data;
  return {
    type: 'Success',
    message: 'successfulVendorFound',
    statusCode: 200,
    vendor
  };
});

/**
 * @desc    Update Vendor Details Using It's ID
 * @param   { Object } user - An object contains logged in user data
 * @param   { Object } body - Body object data for specific vendor
 * @returns { Object<type|message|statusCode|vendor> }
 */
export const updateVendorDetails = catchAsync(async (user, body) => {
  const { vendor } = user;
  const { id, email } = body;

  // 1) Check if user is associated with this vendor
  if (vendor != id) {
    return {
      type: 'Error',
      message: 'notVendorUser',
      statusCode: 400
    };
  }

  const isEmailTaken = await Vendor.isEmailTaken(email, id);

  // 2) Check if email taken or not
  if (email && isEmailTaken) {
    return {
      type: 'Error',
      message: 'emailTaken',
      statusCode: 409
    };
  }

  // 3) Make sure non admin user does not activate disabled vendor
  delete body.isVerified;

  // 4) Find vendor document and update it
  vendor = await Vendor.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  });

  // 5) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulVendorDetails',
    statusCode: 200,
    vendor
  };
});

/**
 * @desc    Update Vendor Status Using It's ID
 * @param   { Object } user - An object contains logged in user data
 * @param   { Object } body - Body object data for specific vendor
 * @returns { Object<type|message|statusCode|vendor> }
 */
export const updateVendorStatus = catchAsync(async (user, body) => {
    const { role } = user;
    const { id, isVerified } = body;
  
    // 1) Check if user has cred 
    if (role != 'admin' || role != 'adminUser') {
      return {
        type: 'Error',
        message: 'roleRestriction',
        statusCode: 400
      };
    }
  
    // 2) Find vendor document and update it
    vendor = await Vendor.findByIdAndUpdate(id, {isVerified:!isVerified}, {
      new: true,
      runValidators: true
    });
  
    // 4) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulVendorDetails',
      statusCode: 200,
      vendor
    };
  });

/**
 * @desc    Update Vendor Logo Image Using It's ID
 * @param   { Object } user - An object contains logged in user data
 * @param   { Object } body - An object contains specific vendor data
 * @param   { Object } logo - Updated Vendor Logo Image
 * @returns { Object<type|message|statusCode> }
 */
export const updateVendorLogo = catchAsync(async (user, body, logo) => {
    const { vendor } = user;
    // 1) Check if user is associated with this vendor
    if (vendor != body.id) {
      return {
        type: 'Error',
        message: 'notVendorUser',
        statusCode: 400
      };
    }
    // 2) Check if logo image is provided
    if (logo === undefined) {
      return {
        type: 'Error',
        message: 'vendorLogoRequired',
        statusCode: 400
      };
    }
  
    const { name, logoId, id } = body;
  
    // 3) Specifiy folder name where the profile image is going to be uploaded in cloudinary
    const folderName = `Vendors/Logo/${name.trim().split(' ').join('')}`;
  
    // 4) Destroy image from cloudinary
    destroyFile(logoId);
  
    // 5) Upload image to cloudinary
    const image = await uploadFile(
      dataUri(logo).content,
      folderName,
      600
    );
  
    // 6) Find vendor document and update it
    vendor = await Vendor.findByIdAndUpdate(
      id,
      {
        logo: image.secure_url,
        logoId: image.public_id
      },
      {
        new: true,
        runValidators: true
      }
    );
  
    // 7) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulUserImage',
      statusCode: 200
    };
  });

/**
 * @desc    Update Vendor Profile Image Using It's ID
 * @param   { Object } user - An object contains logged in user data
 * @param   { Object } body - An object contains specific vendor data
 * @param   { Object } profileImage - Updated Vendor Profile Image
 * @returns { Object<type|message|statusCode> }
 */
export const updateVendorProfileImage = catchAsync(async (user, body, profileImage) => {
  const { vendor } = user;
  // 1) Check if user is associated with this vendor
  if (vendor != body.id) {
    return {
      type: 'Error',
      message: 'notVendorUser',
      statusCode: 400
    };
  }
  // 2) Check if profile image is provided
  if (profileImage === undefined) {
    return {
      type: 'Error',
      message: 'vendorImageRequired',
      statusCode: 400
    };
  }

  const { name, profileImageId, id } = body;

  // 3) Specifiy folder name where the profile image is going to be uploaded in cloudinary
  const folderName = `Vendors/Profile/${name.trim().split(' ').join('')}`;

  // 4) Destroy image from cloudinary
  destroyFile(profileImageId);

  // 5) Upload image to cloudinary
  const image = await uploadFile(
    dataUri(profileImage).content,
    folderName,
    600
  );

  // 6) Find vendor document and update it
  vendor = await Vendor.findByIdAndUpdate(
    id,
    {
      profileImage: image.secure_url,
      profileImageId: image.public_id
    },
    {
      new: true,
      runValidators: true
    }
  );

  // 7) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulUserImage',
    statusCode: 200
  };
});

/**
 * @desc    Delete Vendor Using It's ID
 * @param   { String } id - Vendor ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteVendor = catchAsync(async (id) => {
  const vendor = await Vendor.findByIdAndDelete(id);

  // 1) Check if vendor doesn't exist
  if (!vendor) {
    return {
      type: 'Error',
      message: 'noVendorFoundWithID',
      statusCode: 404
    };
  }

  // 2) Delete vendor profile image
  destroyFile(vendor.profileImageId);

  // 3) Delete vendor logo image
  destroyFile(vendor.logoId);

  //7) Update the user role to user and remove vendor reference to user
  user = await User.findByIdAndUpdate(
    id,
    {
      role: 'user',
      vendor: undefined
    },
    {
      new: true,
      runValidators: true
    }
  );

  // 4) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulVendorDelete',
    statusCode: 200
  };
});
