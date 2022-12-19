import { Router } from "express";
import { LOGINPOST } from "./controllers.js";


const router = Router()
router.post("/user/login", LOGINPOST)


export default router







