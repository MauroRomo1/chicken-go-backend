import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const productNew = new Product(req.body);

    await productNew.save();

    res.status(201).json({
      message: "Producto creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error al crear un producto",
    });
  }
};

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al listar los productos",
    });
  }
};
