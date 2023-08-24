import { Router } from "express";
const router = new Router();

import { getHelp } from "../../controllers/helpControllers.js";

router.route("/").get(getHelp);
