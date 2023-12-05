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

export const editProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "Producto fue editado/modificado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "No se puede editar el producto",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "No se pudo eliminar el producto",
    });
  }
};
