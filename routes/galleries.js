const galleriesController = require("../controllers/galleries")
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/auth')

router.get('/:galleryId', galleriesController.findOne)
router.post('/create', authenticateUser, galleriesController.create)
router.patch('/:galleryId', authenticateUser,galleriesController.updateName)
router.delete('/:galleryId', authenticateUser, galleriesController.delete)

module.exports = router;