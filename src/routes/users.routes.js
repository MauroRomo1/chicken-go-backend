import { Router } from "express";

import { listUsers } from "../controllers/users.controllers.js";

const router = Router();

router.route("/usuario").get(listUsers);

export default router;
