import React, { useState } from 'react';
import { formStyle } from '../../styles';

const ComplaintRegister = () => {
    const [name, setName] = useState('');
    const numberHolder = `TN-${getRandomNumberBetween(50, 99)}`;

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${name}
        \nYour Complaint was Submitted.
        \nTransaction ID is: ${numberHolder}`);
    };

    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div>
            <h2 className='pb-2'>Complaint Register</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div className="form-group">
                    Name
                    <input type="text" className="form-control" value={name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    Complaint:
                    <textarea rows={7} className="form-control">Your Concern Here</textarea>
                </div>
                <button type="submit" className="btn btn-danger bg-danger-subtle border-0 mt-3 text-black shadow">Submit</button>
            </form >
        </div >
    );
};

export default ComplaintRegister;
