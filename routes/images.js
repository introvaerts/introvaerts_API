const imagesController = require("../controllers/images")
const express = require('express');
const router = express.Router();

router.get('/', imagesController.getAll)

module.exports = router;