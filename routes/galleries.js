const galleriesController = require("../controllers/galleries")
const express = require('express');
const router = express.Router();

router.get('/', galleriesController.getAll)

module.exports = router;