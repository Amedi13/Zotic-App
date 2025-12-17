import { register } from 'module';
import { Messages } from 'primereact/messages';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../../backend/api/controllers/authController';

const CreateAccount = () => {
    const [formData, setFromData] = useState ({
        firstname: '',
        lastname: '',
        username: '',
        dob: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target.value
        setFromData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const validate = () => {
        let newErrors = {};
        if (!formData.firstname){
            newErrors.firstname = 'First name is required';
        }
        else if (!formData.lastname){
            newErrors.lastname = 'Last name is required';
        }
        else if (!formData.dob){
            newErrors.dob = 'Date of Birth is required';
        }
        else if (!formData.email){
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = 'Email is not valid';
        }
        else if (!formData.password){
            newErrors.password = 'Password is required';
        }
    }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()){
        // register user api call
        try {
            const response = await registerUser(formData);
            if (response.status === 200){
                Messages.show({ severity: 'success', summary: 'Account Created Successfully', detail: 'You can now log in with your new account.' });
                navigate('/login');
            }
        } catch (error) {
            Messages.show({ severity: 'error', summary: 'Account Creation Failed', detail: 'An error occurred while creating your account.' });
        }
    }
}

    return (
        <div>
            <h2>Create Account</h2>
            <form className="create-account-form">
                <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} placeholder="First Name"></input>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} placeholder="Last Name"></input>
                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} placeholder="Date of Birth"></input>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"></input>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password"></input>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default CreateAccount; 