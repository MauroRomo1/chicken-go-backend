import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  listProducts,
} from "../controllers/products.controllers.js";
import validationProduct from "../helpers/validationProduct.js";

const router = Router();

router.route("/producto").get(listProducts);
router.route("/producto/crear-producto").post(validationProduct, createProduct);
router.route("/producto/editar/:id").put(validationProduct, editProduct);
router.route("/producto/borrar/:id").delete(deleteProduct);

export default router;
