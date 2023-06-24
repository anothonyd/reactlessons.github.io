import React, { useState } from "react";

const ConvertCurrency = () => {
    const [amount, setAmount] = useState(0);
    const usdRate = 0.018;

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const resetCounter = () => {
        setAmount(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const convertedAmount = amount * usdRate;
        alert("Amount in USD: " + convertedAmount.toFixed(2));
    };

    return (
        <div className="currency_converter shadow">
            <div className="converter">
                Amount:
                <input type="number" className="amount" value={amount} onChange={handleChange} />
                Currency: <textarea value="PHP to USD" readOnly className="currency" />
            </div>
            <div className="flex">
                <button className='btn btn-light m-1 rounded-4 border-dark-subtle shadow' onClick={resetCounter}>Reset</button>
                <button className="btn btn-dark m-1 rounded-4 border-dark-subtle shadow" onClick={handleSubmit}>
                    Convert
                </button>
            </div>
        </div>
    );
};

export default ConvertCurrency;
