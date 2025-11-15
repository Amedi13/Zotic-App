require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); 

// Test Health
app.get('/api/health', (req, res) => {
    res.json({ ok: true, message: "backend is running"});
});

// Server
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});