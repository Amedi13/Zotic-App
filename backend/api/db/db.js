const express = require('express');
const { Pool } = require('pg');
const app = express();
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// verify connection
pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));


/**
 * Check if user exists in the database
 */
 function authUser(username, email){
    const sqlQuery = 'SELECT * from users where username = ? OR email = ?';
   return new Promise((resolve, reject) => {
        pool.query(sqlQuery, [username, email], (error, results) => {
            if (error) {
                return reject(error);
            }
           if (results.length > 0) {
            //user exists
            resolve(true);
           }
           else {
            //user does not exist
            resolve(false);
           }
        });
    });
}


// export the app and pool for use in other files
module.exports = pool; 
module.exports = {authUser}