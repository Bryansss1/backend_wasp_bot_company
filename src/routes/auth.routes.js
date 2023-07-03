const {Router}=require("express")
const { getUserss } = require("../controllers/auth.controller")

const router=Router()


router.get("/users",getUserss)
router.post("/users")

router.get("/admins")
router.post("/register/admin")
router.post("/login/admin")
router.patch("/update/admin/:id")
router.delete("/delete/admin/:id")

module.exports=router

