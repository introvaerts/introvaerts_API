const galleriesController = require("../controllers/galleries")
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/auth')

router.get('/:id', galleriesController.findOne)
router.post('/create', authenticateUser, galleriesController.create)
router.patch('/:id', authenticateUser,galleriesController.updateName)
router.delete('/:id', authenticateUser, galleriesController.delete)

module.exports = router;