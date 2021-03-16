const subdomainsController = require('../controllers/subdomains');
const express = require('express');
const authenticateUser = require('../middlewares/auth');
const router = express.Router();

router.get('/:id', subdomainsController.findOne);
router.get('/names/:name', subdomainsController.findByName);
router.get('/publish/:id', authenticateUser, subdomainsController.publish);
router.get('/', authenticateUser, subdomainsController.getAllByUser);
router.post('/create', authenticateUser, subdomainsController.create);
router.patch('/:id', authenticateUser, subdomainsController.update);
router.get(
  '/available/:name',
  authenticateUser,
  subdomainsController.isAvailable
);
router.patch(
  '/about/image-upload',
  authenticateUser,
  subdomainsController.imageUpload
);
module.exports = router;
