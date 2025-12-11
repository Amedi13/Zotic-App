const express = require('express');
const postgres = require('pg');
const app = express();
const PORT = 3000; 
require('dotenv').config();

// create a connection
const connection = new postgres.createConnection({
    host: 'DB_HOST',
    user: 'DB_USER',
    password: 'DB_PASSWORD',
    database: 'DB_NAME',
    port: 'DB_PORT'
})

// open the connection
connection.connect(error => {
    if (error)
        console.error("Error connection to the database") 
    throw error;

    console.log("Successfully connected to the database.");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});
