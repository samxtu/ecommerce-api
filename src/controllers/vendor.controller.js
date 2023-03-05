// Utils
import catchAsync from '../utils/catchAsync';
// Services
import { vendorService } from '../services/index';

/**
 * @desc      Create New Vendor Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.file - Vendor logo
 * @property  { String } req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type, message and vendor data
 */
export const createVendor = catchAsync(async (req, res) => {
  // 1) Create new vendor
  const { type, message, statusCode, vendor } = await vendorService.createVendor(
    req.body,
    req.file,
    req.user.id
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    vendor
  });
});

/**
 * @desc      Get All Vendors Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.query.sort - Sort returned data
 * @property  { String } req.query.select - Select specific fields
 * @property  { Number } req.query.page - Page number
 * @property  { Number } req.query.limit - Maximum number of vendors in page
 * @returns   { JSON } - A JSON object representing the type, message and vendors
 */
export const getVendors = catchAsync(async (req, res) => {
    let { page, sort, limit, select } = req.query;
  
    // 1) Setting default params
    if (!page) page = 1;
    if (!sort) sort = '';
    if (!limit) limit = 10;
    if (!select) select = '';
  
    // 2) Get all vendors
    const { type, message, statusCode, vendors } = await vendorService.queryVendors(
      req
    );
  
    // 3) Check if there is an error
    if (type === 'Error') {
      return res.status(statusCode).json({
        type,
        message: req.polyglot.t(message)
      });
    }
  
    // 4) If everything is OK, send data
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message),
      vendors
    });
});


/**
 * @desc      Get Vendor Data Using It's ID Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - Vendor ID
 * @returns   { JSON } - A JSON object representing the type, message, and Vendor data
 */
export const getVendor = catchAsync(async (req, res, next) => {
  // 1) Find Vendor Document By It's ID Controller
  const { type, message, statusCode, vendor } = await vendorService.queryVendor(
    req.params.id
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    vendor
  });
});

/**
 * @desc      Update Vendor Details Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.user - An object contains logged in user data
 * @returns   { JSON } - A JSON object representing the type, message and vendor data
 */
export const updateVendorDetails = catchAsync(async (req, res) => {
  // 1) Find vendor document and update it's details
  const { type, message, statusCode, vendor } =
    await vendorService.updateVendorDetails(req.user, req.body);

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    vendor
  });
});

/**
 * @desc      Update Vendor Status Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.user - An object contains logged in user data
 * @returns   { JSON } - A JSON object representing the type, message and vendor data
 */
export const updateVendorStatus = catchAsync(async (req, res) =>{
  // 1) Find vendor document and update it's status
  const { type, message, statusCode, vendor } =
    await vendorService.updateVendorStatus(req.user, req.body);

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    vendor
  });
});

/**
 * @desc      Update Vendor Profile Image Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.file - Vendor profile image
 * @property  { Object } req.body - An object contains specific Vendor data
 * @property  { Object } req.user - An object contains logged in user data
 * @returns   { JSON } - A JSON object representing the type, message and Vendor data
 */
export const updateVendorProfileImage = catchAsync(async (req, res) => {
  // 1) Find vendor document and update it's profile image
  const { type, message, statusCode, vendor } =
    await vendorService.updateVendorProfileImage(req.user, req.body, req.file);

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    vendor
  });
});


/**
 * @desc      Update Vendor Logo Image Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.file - Vendor logo image
 * @property  { Object } req.user - An object contains logged in user data
 * @property  { Object } req.body - An object contains specific Vendor data
 * @returns   { JSON } - A JSON object representing the type, message and Vendor data
 */
export const updateVendorLogo = catchAsync(async (req, res) => {
    // 1) Find vendor document and update it's logo image
    const { type, message, statusCode, vendor } =
      await vendorService.updateVendorLogo(req.user, req.body, req.file);
  
    // 2) Check if there is an error
    if (type === 'Error') {
      return res.status(statusCode).json({
        type,
        message: req.polyglot.t(message)
      });
    }
  
    // 3) If everything is OK, send data
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message),
      vendor
    });
  });
  
/**
 * @desc      Delete Vendor's Data Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - Vendor ID
 * @returns   { JSON } - A JSON object representing the type and message
 */
export const deleteVendor = catchAsync(async (req, res) => {
    // 1) Find vendor document and delete it
    const { type, message, statusCode } = await vendorService.deleteVendor(
      req.params.id
    );
  
    // 2) Check if there is an error
    if (type === 'Error') {
      return res.status(statusCode).json({
        type,
        message: req.polyglot.t(message)
      });
    }
  
    // 3) If everything is OK, send data
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
});
