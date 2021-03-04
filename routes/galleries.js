const galleriesController = require("../controllers/galleries")
const express = require('express');
const router = express.Router();

router.get('/:galleryId', galleriesController.findOne)
router.post('/create', galleriesController.create)
router.patch('/removeImage', galleriesController.deleteImage)
router.patch('/update', galleriesController.updateName)

module.exports = router;