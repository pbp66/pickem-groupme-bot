import { Router } from "express";
import helpRoutes from "./help.js";
const router = new Router();

router.use("/help", helpRoutes);

export default router;
