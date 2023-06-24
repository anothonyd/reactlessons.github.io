import backgroundImage from './Weather.jpg'; // Import the image using the relative path
import { containerStyle } from '../../styles';
import WeatherAPI from './WeatherAPI';

const Fourteen = () => {

  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImageRepeat: 'no-repeat' }}>
      <div className='bg-dark bg-opacity-50 rounded-5 p-3 shadow'>
        <WeatherAPI />
      </div>
    </div>
  );
};

export default Fourteen;
