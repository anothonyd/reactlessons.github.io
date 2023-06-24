import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { countryList } from '../../constants';
import { getWeatherIcon } from '../../constants';

const WeatherAPI = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                if (selectedCountry) {
                    const response = await fetch(
                        `https://api.weatherapi.com/v1/current.json?key=e42fbca5cfc540d69e043206232406&q=${selectedCountry}&aqi=no`
                    );
                    const data = await response.json();
                    setWeatherData(data);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        const getCurrentDate = () => {
            const now = new Date();
            const formattedDate = format(now, 'EEEE, MMMM d, yyyy');
            setCurrentDate(formattedDate);
        };

        const getCurrentTime = () => {
            const now = new Date();
            const formattedTime = format(now, 'HH:mm:ss');
            setCurrentTime(formattedTime);
        };

        fetchWeatherData();
        getCurrentDate();
        getCurrentTime();

        const interval = setInterval(getCurrentTime, 1000);

        return () => clearInterval(interval);
    }, [selectedCountry]);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <div className='text-light' style={{ minWidth: '400px' }}>
            <div className='bg-dark bg-opacity-75 p-3 rounded-4'>
                <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    style={{
                        padding: '8px',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(225, 255, 255,)',
                        color: '#333',
                        width: '200px',
                        textAlign: 'start'
                    }}
                >
                    <option value=''>Select a country</option>
                    {countryList.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>

            {selectedCountry && weatherData && (
                <>
                    <div
                        className='bg-dark bg-opacity-75 py-1 mt-3 rounded-4'
                        style={{
                            minHeight: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <p className='pb-0 mb-0'
                            style={{ fontSize: '80px' }}>{weatherData.current.temp_c}°C</p>
                        <div>
                            <p style={{ fontSize: '50px' }}>{getWeatherIcon(weatherData.current.condition.code)}{' '}</p>
                            <p className='pt-0 mt-0'>{weatherData.current.condition.text}</p>
                        </div>
                        <div>
                            <p>{currentDate}</p>
                            <h1>{currentTime}</h1>
                        </div>


                        <p>Wind: {weatherData.current.wind_kph} km/h</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default WeatherAPI;
