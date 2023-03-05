import mongoose from 'mongoose';
import toJSON from './plugins/index';

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: Date,
  location: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  profileImage: {
    type: String
  },
  profileImageId: {
    type: String
  },
  logo: {
    type: String,
    required: true
  },
  logoId: {
    type: String,
    required: true
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  title: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  }
});

// Apply the toJSON plugin to convert the Mongoose document to a JSON object
vendorSchema.plugin(toJSON);


/**
 * Check if email is already associated with another vendor
 * @param {string} email - The vendor email
 * @param {ObjectId} [excludeVendorId] - The id of the vendor to be excluded
 * @returns {Promise<boolean>}
 */
vendorSchema.statics.isEmailTaken = async function (email, excludeVendorId) {
  const vendor = await this.findOne({ email, _id: { $ne: excludeVendorId } });
  return !!vendor;
};

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
