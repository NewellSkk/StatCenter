const express = require("express");
const teamController = require("../controllers/team");
const { google } = require("googleapis");
const router = express.Router();
const { client_id, client_secret, redirect_uris } = process.env.CRED;
// const oAuth2Client = new google.auth.OAuth2(
//   client_id,
//   client_secret,
//   redirect_uris[0]
// );
router.post("/register", teamController.register);
module.exports = router;
