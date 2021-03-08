const subdomainsController = require('../controllers/subdomains');
const express = require('express');
const authenticateUser = require('../middlewares/auth');
const router = express.Router();

router.get('/', subdomainsController.getAllByUser);
router.get('/:id', subdomainsController.findOne);
router.post('/create', authenticateUser, subdomainsController.create);
router.patch('/:id', authenticateUser, subdomainsController.update);
router.get('/available/:name', authenticateUser, subdomainsController.isAvailable);
module.exports = router;
