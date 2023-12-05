import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  listProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/producto").get(listProducts);
router.route("/producto/crear-producto").post(createProduct);
router.route("/producto/editar/:id").put(editProduct);
router.route("/producto/borrar/:id").delete(deleteProduct);

export default router;
