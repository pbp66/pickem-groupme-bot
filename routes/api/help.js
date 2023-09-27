import express from "express";
const router = express.Router();
import { getHelp } from "../../controllers/helpControllers.js";

router.get("/", getHelp);

export default router;
