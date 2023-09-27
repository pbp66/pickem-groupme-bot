import express from "express";
const router = express.Router();
import { getHelp } from "../../controllers/helpControllers.js";

router.get("/", getHelp(req, res));

export default router;
