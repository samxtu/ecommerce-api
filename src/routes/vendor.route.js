// Packages
import express from 'express';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';
// Controllers
import {
  createVendor,
  getVendors,
  getVendor,
  updateVendorDetails,
  updateVendorProfileImage,
  updateVendorLogo,
  deleteVendor,
  updateVendorStatus
} from '../controllers/vendor.controller';

// Utils
import { singleFile } from '../utils/multer';

// Router Initialization
const router = express.Router();

// Get All Vendors Route
router.get('/', getVendors);

// Get Vendor Route
router.get('/:id', getVendor);

// Protect All Next Routes
router.use(protect);

// Create New Vendor (Multer Middleware) Route
router.post('/', restrictedTo('user'), singleFile('image'), createVendor);

// Update Vendor Details Route
router.patch('/update-details', updateVendorDetails);

// Update Vendor status Route
router.patch('/update-status', restrictedTo('admin', 'adminUser'), updateVendorStatus);

// Update Vendor Profile Image (Multer Middleware) Route
router.patch(
  '/update-profile-image',
  singleFile('image'),
  updateVendorProfileImage
);

// Update Vendor Logo Image (Multer Middleware) Route
router.patch(
    '/update-logo',
    singleFile('image'),
    updateVendorLogo
  );

// Delete Vendor Route
router.delete('/:id', restrictedTo('admin','seller'), deleteVendor);

export default router;
