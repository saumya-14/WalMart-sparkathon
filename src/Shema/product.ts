import mongoose, { Schema } from 'mongoose';

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

const addtocartsema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId}]
})

// Check if the model already exists
export const AddtoCart = mongoose.models.AddtoCart || mongoose.model('AddtoCart',addtocartsema);
export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

