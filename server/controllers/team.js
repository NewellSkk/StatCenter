const { google } = require("googleapis");
const fs = require("fs");
const multer = require("multer");
exports.register = async (req, res) => {
  const upload = multer({ storage: multer.memoryStorage() });
};
