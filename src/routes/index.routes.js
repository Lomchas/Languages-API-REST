import { Router } from "express";
import { main_controller } from "../controllers/index.controller.js";


const router = Router();

router.get('/', main_controller);

export default router;