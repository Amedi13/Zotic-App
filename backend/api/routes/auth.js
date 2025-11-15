const express = require('express');
const router = express.Router();

//auth controller will go here

// Register a new user
router.post('/register', (authController.registerUser)); 

// Login a user
router.post('/login', (authController.loginUser));

// Logout a user
router.post('/logout', (authController.logoutUser));

// Protected route - User Profile
router.get('/profile', authMiddleware, authController.getUserProfile);