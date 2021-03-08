const express = require('express');
const usersController = require('../controllers/users');
const authenticateUser = require('../middlewares/auth');

const router = express.Router();

router.post('/create', usersController.create);
router.post('/login', usersController.login);
router.get('/account', authenticateUser, usersController.getInfo);
router.patch('/account', authenticateUser, usersController.updateEmail);

module.exports = router;
