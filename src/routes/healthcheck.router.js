import health from "../controllers/healthcheck.controller.js";

import { Router } from "express";

const router = Router()

router.route("/").get(health)

export default router