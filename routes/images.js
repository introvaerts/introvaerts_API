const imagesController = require('../controllers/images');
const authenticateUser = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/upload', authenticateUser, imagesController.upload);

module.exports = router;
