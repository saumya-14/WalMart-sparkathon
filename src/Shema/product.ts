import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sellprice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
}, {
  timestamps: true
});

// Check if the model already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export { Product };
