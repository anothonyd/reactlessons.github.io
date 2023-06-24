import React, { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function Bootcamp() {
    const [showWarning, setShowWarning] = useState(true);
    const handleToggleClick = () => {
        setShowWarning(prevState => !prevState);
    };

    return (
        <div className='course_bootcamp pt-4'
            style={{
                position: 'absolute',
                top: '0',
                right: '0',
                left: '0'
            }}>
            <button
                onClick={handleToggleClick}
                className="btn btn-dark btn-lg mt-2 shadow"
            >
                {showWarning ? 'Hide' : 'Show'}
            </button>
            <WarningBanner warn={showWarning} />
        </div>
    );
};


