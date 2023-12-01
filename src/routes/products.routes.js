import { Router } from "express";
import { createProduct } from "../controllers/products.controllers.js";

const router = Router();

router.route("/producto");
router.route("/producto/crear-producto").post(createProduct);

export default router;
