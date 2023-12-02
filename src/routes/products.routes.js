import { Router } from "express";
import {
  createProduct,
  editProduct,
  listProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/producto").get(listProducts);
router.route("/producto/crear-producto").post(createProduct);
router.route("/producto/editar/:id").put(editProduct);

export default router;
