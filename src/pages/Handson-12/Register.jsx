import React, { useState } from 'react';
import { formStyle, inputStyle } from '../../styles';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length < 5 || !email.includes('@') || !email.includes('.') || password.length < 8) {
            let message = 'Please fill in the form correctly.';
            if (!email.includes('@') || !email.includes('.')) {
                message = 'Please provide a valid email address.';
            } else if (password.length < 8) {
                message = 'Please enter a password with at least 8 characters.';
            }
            alert(message);
        } else {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputStyle}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={inputStyle}>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={inputStyle}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-success bg-opacity-75 shadow' type="submit">Submit</button>
            </form>
        </div>
    );
};
