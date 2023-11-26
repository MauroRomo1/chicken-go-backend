import { Router } from "express";
import {
  createUser,
  listUsers,
  login,
} from "../controllers/users.controllers.js";
import validationUser from "../helpers/validationUser.js";

const router = Router();

router.route("/usuario").get(listUsers);
router.route("/usuario/crear-usuario").post(validationUser, createUser);
router.route("/usuario/login").post(login);

export default router;
