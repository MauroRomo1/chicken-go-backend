import { Router } from "express";

import { createUser, listUsers } from "../controllers/users.controllers.js";
import { check } from "express-validator";

const router = Router();

router.route("/usuario").get(listUsers);
router.route("/usuario/crear-usuario").post(
  [
    check("nickname")
      .notEmpty()
      .withMessage("El nickname es un dato obligatorio.")
      .isLength({ min: 2, max: 20 })
      .withMessage("El nickname debe de tener entre 2 y 20 caracteres."),
    check("email")
      .notEmpty()
      .withMessage("El email es un dato obligatorio.")
      .isLength({ min: 6, max: 150 })
      .withMessage("El email debe de tener entre 6 y 150 caracteres.")
      .matches(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/i)
      .withMessage("El email no cumple con un formato valido."),
  ],
  createUser
);

export default router;
