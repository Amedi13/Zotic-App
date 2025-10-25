import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleLogin = (e) => {

    }
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
      try {
         const handleOnSubmit = (e) => {
        e.preventDefault();
        if (validate){
            // login the user
        }
      }

      } catch (error) {
        setErrors({ submit: 'An error occurred during login. Please try again.' });
      }
}; 

