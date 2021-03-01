const usersController = require("../controllers/users")
const express = require('express');
const router = express.Router();

router.get('/', usersController.getAll)

module.exports = router;