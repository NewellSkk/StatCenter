const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const teamRoutes = require("./team");
const router = express.Router();
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/team", teamRoutes);
module.exports = router;
