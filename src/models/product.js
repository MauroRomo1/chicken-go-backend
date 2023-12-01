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
    max: 10000,
  },
  category: {
    type: String,
    required: true,
  },
  detailProduct: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

// vamos a generar un modelo
const Product = mongoose.model("products", productSchema);

export default Product;
