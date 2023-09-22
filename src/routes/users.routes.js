import { Router } from "express";
import { createUser, listUsers } from "../controllers/users.controllers.js";
import validationUser from "../helpers/validationUser.js";

const router = Router();

router.route("/usuario").get(listUsers);
router.route("/usuario/crear-usuario").post(validationUser, createUser);

export default router;
