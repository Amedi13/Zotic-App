const express = require('express');
const router = express.Router();

//auth controller will go here
const userController = require('../controllers/userController.js');

// Register a new user

router.get('/users', (userController.getAllUsers));

module.exports = router;
