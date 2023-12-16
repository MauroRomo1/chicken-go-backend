import { check } from "express-validator";
import resultValidation from "./validationResult.js";

const validationProduct = [
  check("nameProduct")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage(
      "El nombre del producto debe de tener entre 2 y 50 caracteres"
    ),
  check("price")
    .notEmpty()
    .withMessage("El precio del producto es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio del producto debe de ser un numero")
    .custom((value) => {
      if (value >= 1 && value <= 30000) {
        return true;
      } else {
        throw new Error("El precio del producto debe de se entre 1 y 30000");
      }
    }),
  check("category")
    .notEmpty()
    .withMessage("La categoria del producto es un dato obligatorio")
    .isIn(["comida", "bebida", "postre"])
    .withMessage("Debes de ingresar una categoria valida"),
  check("detailProduct")
    .notEmpty()
    .withMessage("El detalle del producto es un dato obligatorio")
    .isLength({ min: 10, max: 1000 })
    .withMessage(
      "El detalle del producto debe de tener entre 10 y 1000 caracteres"
    ),
  check("imageURL")
    .notEmpty()
    .withMessage("La imagen del producto es un dato obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Debe de enviar una URL de imagen valida"),

  (req, res, next) => {
    resultValidation(req, res, next);
  },
];

export default validationProduct;
