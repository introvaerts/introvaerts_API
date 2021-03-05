const galleriesController = require("../controllers/galleries")
const express = require('express');
const router = express.Router();

router.get('/:galleryId', galleriesController.findOne)
router.post('/create', galleriesController.create)
router.patch('/:galleryId', galleriesController.updateName)
router.delete('/:galleryId', galleriesController.delete)

module.exports = router;