import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  nameProduct: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 30000,
  },
  category: {
    type: String,
    required: true,
  },
  detailProduct: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

// vamos a generar un modelo
const Product = mongoose.model("products", productSchema);

export default Product;
