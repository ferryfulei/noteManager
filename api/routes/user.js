const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', userController.signup);

router.delete('/:userId', checkAuth, userController.delete);

router.post('/login', userController.login);
module.exports = router;