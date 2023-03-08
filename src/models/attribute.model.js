// Packages
import mongoose from 'mongoose';

// Plugins
import toJSON from './plugins/index';

const attributeSchema = mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    ],
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
attributeSchema.plugin(toJSON);

const Attribute = mongoose.model('Attribute', attributeSchema);

export default Attribute;
