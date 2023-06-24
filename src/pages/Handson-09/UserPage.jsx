import React from 'react';

const UserPage = () => {
    return (
        <div>
            <h1>Hi there, Valued Customer!!</h1>
            <h5>Flight Details:</h5>
            <div className='bg-info-subtle bg-opacity-25 pt-3 p-2 mt-3 rounded-3'>
                <p>Flight Number: XYZ123</p>
                <p>Departure: New York</p>
                <p>Destination: London</p>
                {/* Add more flight details as needed */}
            </div>
        </div>
    );
};

export default UserPage;