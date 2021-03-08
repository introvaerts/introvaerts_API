const imagesController = require('../controllers/images');
const authenticateUser = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.use(authenticateUser);
router.post('/upload', imagesController.upload);
router.delete('/:id', imagesController.delete);

module.exports = router;
