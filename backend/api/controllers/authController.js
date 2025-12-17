import User from '../models/User.js'; 
import bcrypt from 'bcryptjs';
import { authUser } from '../db/db.js';

//user instance 
const user = new User();

/**
 * Register a new user
 * @param {Object} req 
 * @param {Object} res 
 */
export const registerUser = async (req, res) => {
    const { firstname, lastname, username, email, password, dob } = req.body;
    try {
        const userExist = await authUser(username, email);
            if (userExist) {
                return  res.status(400).json({ message: "Username or Email already exists" });
            }
            else {
                //hash password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                //add user to database
            const newUser = new User({ 
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            dob: req.body.dob

            }) 

            //save user to database
            await newUser.save();
            res.status(201).json({ message: "User registered successfully" });

        }
    } catch (error) {res.status(500).json({ message: "Internal Server Error" });}
}

/**
 * Login a user
 * @param {Object} req 
 * @param {Object} res
 */
export const loginUser = async (req, res) => {
    const { email, password } = req.body; 

    try {
         // Check if user exists in the database
        const existingUser = await User.findOne ({ email: user.email})
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (e) {
        //error handling
        res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json({ message: "User logged in successfully" });
   
}
