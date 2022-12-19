import { Router } from "express";
import { ADSDELETES, ADSGET, ADSGETMALIMOTLAR, ADSGETVIEWS, ADSIMG, ADSPAGE, ADSPOST, ADSUPDATE, ADSVIEWS, GETADS } from "./controllaers.js";
import uploads from "../../lib/multer.js"
import chektoken from "../../middlewares/chektoken.js";

const  router = Router()

// actevlar chiqishi
router.get("/ads/get", ADSGET)

// hmmasi 2
router.get("/ads/get/malumotlar/:id", ADSGETMALIMOTLAR)
router.delete("/ads/get/delete/:id", ADSDELETES)

router.get("/ads/get/views/:id", ADSGETVIEWS)

router.get("/ads/get/views", ADSVIEWS)

// http://localhost:9090//ads/pagination?page=2&limit=3
router.get("/ads/pagination", ADSPAGE)
// img
router.post("/ads/post", uploads.single('ad_img'), ADSPOST)

// hammasi 
router.get("/get/ads", chektoken, GETADS)

// put qilish 
router.put("/ads/put/:id", ADSUPDATE)
// rasim
router.get("/:file", ADSIMG)



export default router













