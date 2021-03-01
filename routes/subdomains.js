const subdomainsController = require("../controllers/subdomains")
const express = require('express');
const router = express.Router();

router.get('/', subdomainsController.getAll)

module.exports = router;