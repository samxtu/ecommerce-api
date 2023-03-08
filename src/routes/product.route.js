// Packages
import express from 'express';

// Controllers
import { productController } from '../controllers/index';

// Middlewares
import protect from '../middlewares/protect';

// Utils
import { anyMulter } from '../utils/multer';

// Routes
import reviewRoute from './review.route';

const {
  getAllProducts,
  getProduct,
  addProduct,
  addProductSpecification,
  addProductAttribute,
  deleteProductSpecification,
  deleteProductAttribute,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats
} = productController;

const router = express.Router();

router.use('/:productId/reviews', reviewRoute);

router.get('/top-5-cheap', getAllProducts, top5Cheap);

router.get('/product-stats', productStats);

router.get('/', getAllProducts);

router.get('/:productId', getProduct);

router.use(protect);

router
  .route('/specification/:productId')
  .post(addProductSpecification)
  .delete(deleteProductSpecification);

router.route('/attribute/:productId').post(addProductAttribute).delete(deleteProductAttribute);

router.post('/', anyMulter(), addProduct);

router.patch('/:productId/details', updateProductDetails);

router.patch('/:productId/main-image', anyMulter(), updateProductMainImage);

router.patch('/:productId/images', anyMulter(), updateProductImages);

router.delete('/:productId', deleteProduct);

export default router;
