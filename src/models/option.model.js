// Packages
import mongoose from 'mongoose';

// Plugins
import toJSON from './plugins/index';

const optionSchema = mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    ],
    specification: {
      type: mongoose.Schema.ObjectId,
      ref: 'Specification'
    },
    value: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
optionSchema.plugin(toJSON);

const Option = mongoose.model('Option', optionSchema);

export default Option;
