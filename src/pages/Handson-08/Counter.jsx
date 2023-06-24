import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const stateCount = () => {
        return ('');
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const keyPressDown = () => {
        alert('Down button pressed');
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div className='counter shadow'>
            Counter
            <p className='countBox'>{count}</p>
            <div className='buttons'>
                <button className='btn btn-success m-1 rounded-4 border-dark-subtle shadow' onClick={() => { stateCount(); setCount(count + 1) }}>Plus One</button>
                <button className='btn btn-danger m-1 rounded-4 border-dark-subtle shadow' onClick={() => setCount(count - 1)}>Minus One</button>
                <button className='btn btn-primary m-1 rounded-4 border-dark-subtle shadow' onClick={resetCounter}>Reset</button>
                <button className='btn btn-dark m-1 rounded-4 border-dark-subtle shadow' onClick={() => sayWelcome('Welcome')}>Say "Welcome"</button>
                <input className='btn btn-warning m-1 rounded-4 border-dark-subtle shadow' type="submit" value='Click and press "Down"' onKeyDown={keyPressDown}></input>
            </div>
        </div>
    );
};

export default Counter;
