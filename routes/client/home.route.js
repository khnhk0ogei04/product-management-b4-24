const express = require('express');
const router = express.Router();
const controller = require("../../controllers/client/home.controller");
// Router
router.get("/", controller.index);
module.exports = router;