import { Router } from "express";
import { CATEGORYGET , SUBCATEGORY, SUBCATEGORYGET} from "./controllaers.js";

const  router = Router()

router.get("/category/get", CATEGORYGET)
// router.get("/categorys/get", CATEGORYSGET)
router.get("/subcategory/get", SUBCATEGORYGET)
router.get("/subcategorys/get", SUBCATEGORY)


export default router













