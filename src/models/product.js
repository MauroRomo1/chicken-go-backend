import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  nameProduct: {
    Type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  price: {
    Type: Number,
    required: true,
    min: 1,
    max: 50000,
  },
  category: {
    Type: String,
    required: true,
  },
  detailProduct: {
    Type: String,
    required: true,
  },
  imageURL: {
    Type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
