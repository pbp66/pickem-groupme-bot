import { Router } from "express";
const router = new Router();

import { createMessage } from "../../controllers/callbackControllers.js";

router.route("/").post(createMessage);

// TODO: Implement callback routes. Use Middleware routes to rewrite the url and redirect to the appropriate controllers. 

export default router;
