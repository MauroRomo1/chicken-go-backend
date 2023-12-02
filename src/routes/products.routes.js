import { Router } from "express";
import {
  createProduct,
  listProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/producto").get(listProducts);
router.route("/producto/crear-producto").post(createProduct);

export default router;
