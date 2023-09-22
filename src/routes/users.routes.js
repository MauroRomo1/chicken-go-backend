import { Router } from "express";

import { createUser, listUsers } from "../controllers/users.controllers.js";
import { check } from "express-validator";

const router = Router();

router.route("/usuario").get(listUsers);
router
  .route("/usuario/crear-usuario")
  .post(
    [
      check("nickname")
        .notEmpty()
        .withMessage("El nickname es un dato obligatorio.")
    ],
    createUser
  );

export default router;
