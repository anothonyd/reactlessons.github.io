import React, { useState } from 'react';
import UserPage from './UserPage';
import { formStyle, inputStyle } from '../../styles';

const GuestPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here with the email and password values
        console.log('Login form submitted:', email, password);
        // Reset the form after submission
        setEmail('');
        setPassword('');
        // Call the handleLoginClick function to update the login state
        handleLoginClick();
    };

    return (
        <>
            {isLoggedIn ? (
                <UserPage />
            ) : (
                <div style={{minWidth:'300px'}}>
                    <h1>Welcome</h1>
                    <p>Please login to continue</p>
                    <form onSubmit={handleFormSubmit} style={formStyle}>
                        <div style={inputStyle}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div style={inputStyle}>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div >
        <button
            className="btn btn-primary mt-3 shadow"
            type="submit">Login
        </button>

                    </form >
                </div >
            )}
<br />
{
    isLoggedIn && (
        <button className="btn btn-primary shadow" onClick={handleLogoutClick}>
            Logout
        </button>
    )
}
        </>
    );
};

export default GuestPage;
