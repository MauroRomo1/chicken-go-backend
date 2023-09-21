import { Router } from "express";

import { createUser, listUsers } from "../controllers/users.controllers.js";

const router = Router();

router.route("/usuario").get(listUsers);
router.route("/usuario/crear-usuario").post(createUser);

export default router;
