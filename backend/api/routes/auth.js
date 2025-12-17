const express = require('express');
const router = express.Router();

//auth controller will go here
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');



router.get('/users', (userController.getAllUsers));
router.post('/register', (authController.registerUser));
router.post('/login', (authController.loginUser));

module.exports = router;
