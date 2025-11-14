import React, { useState } from 'react';

const Profile = () => {
    // array of perfered pets for the user
    const [formData, setFormData] = useState({
        bio: '',
        phoneNumber: '',
        address: '', 
        amount: '', //amount is the amount user is willing to oay for pet sitting per/hr
        perferedPets: [],
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    }
};  

export default Profile;