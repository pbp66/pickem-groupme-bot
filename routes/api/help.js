import { Router } from "express";
const router = new Router();

import { getHelp } from "../../controllers/helpController.js"

router.route("/").get(getHelp);