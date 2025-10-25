import React, {useState} from 'react';
import { Messages } from 'primereact/messages';
// @ts-ignore: no declaration file for Messages.jsx
import { useNavigate } from 'react-router-dom';



const Login = () => {
    //Reuqired fields for the login form 
    const [formData, setFormData] = useState({ 
        firstname: '',
        lastname: '',
        dob: '',
        email: '', 
        password: '',
    });
    
    const navigate = useNavigate();
    
    // input change handler
    const handleInputChange = (e) => {
        const {name, value, } = e.target;
       // dynamically update the attribute of the input element
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    }
    //Validation upon login
    const validate = () => {
        let newErrors = {};
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is not valid';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      // try tp submit, if it fails defualt to an error message
      
        const handleOnSubmit = (e) => {
        e.preventDefault();
        if (validate){
            // login the user and go to home page + success message 
           // Messages.show({ severity: 'success', summary: 'Login Successful', detail: 'You have successfully logged in!' });
            return navigate('/home');
        } 
        else {
            setErrors({ submit: 'An error occurred during login. Please try again.' });
            return navigate('/Login')
        }
      }

      

      return (
        <div className="login-page">
            <section className="login-form">
                <form>
                    <div className="login-card">
                        <h2>Login</h2>
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} placeholder="First Name"></input>
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange}placeholder="Last Name"></input>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"></input>
                        <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} placeholder="Date of Birth"></input>

                        <button type="submit" onClick={handleOnSubmit}>submit</button>
                    </div>
                </form>
            </section>
        </div>
      )
}; 

export default Login; 
