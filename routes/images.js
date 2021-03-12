const imagesController = require('../controllers/images');
const authenticateUser = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.get('/:id', imagesController.getOne)
router.post('/upload', authenticateUser, imagesController.upload);
router.delete('/:id', authenticateUser, imagesController.delete);

module.exports = router;
