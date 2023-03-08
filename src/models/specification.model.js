// Packages
import mongoose from 'mongoose';

// Plugins
import toJSON from './plugins/index';

const specificationSchema = mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    ],
    option: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Option'
      }
    ],
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
specificationSchema.plugin(toJSON);

const Specification = mongoose.model('Specification', specificationSchema);

export default Specification;
