const subdomainsController = require('../controllers/subdomains');
const express = require('express');
const authenticateUser = require('../middlewares/auth');
const router = express.Router();

router.use(authenticateUser);
router.get('/', subdomainsController.getAllByUser);

module.exports = router;
