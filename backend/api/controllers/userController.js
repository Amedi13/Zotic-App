const pool = require('../db/db.js');


/**
 * Get all users
 * @param {Object} req 
 * @param {Object} res
 */
const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getAllUsers };