const express= require ('express');
const registerController=require("../controllers/register");
const router=express.Router();
router.post("/user",registerController.user);
module.exports = router;