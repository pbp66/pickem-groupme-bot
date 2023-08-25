import { Router } from "express";
const router = new Router();

import { createMessage } from "../../controllers/callbackControllers.js";

router.route("/").post(createMessage);

// TODO: Implement callback routes

export default router;
