import { Router } from "express";
import callbackRoutes from "./callback.js";
import helpRoutes from "./help.js";
const router = new Router();

router.use("/callback", callbackRoutes);
router.use("/help", helpRoutes);

export default router;
