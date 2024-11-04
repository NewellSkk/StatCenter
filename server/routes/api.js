const express=require("express");
const authRoutes = require("./auth");
const regRoutes = require('./register');
const router = express.Router();
router.use('/auth',authRoutes);
router.use('/register',regRoutes);
module.exports=router;
