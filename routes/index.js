import { Router } from "express";
import apiRoutes from "./api/index.js";
const router = new Router();

import { logger } from "../middleware/index.js";

router.use(logger);

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong Route!"));

export default router;
