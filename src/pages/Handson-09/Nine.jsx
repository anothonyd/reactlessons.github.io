import GuestPage from './GuestPage';
import backgroundImage from './bg.jpg'; // Import the image using the relative path
import { containerStyle } from '../../styles';

const Nine = () => {
  
  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImageRepeat: 'no-repeat' }}>      
    <div className='bg-info-subtle rounded-5 p-3 shadow'>
        <div className='bg-info rounded-5 p-4 shadow'>
          <GuestPage />
        </div>
      </div>
    </div>
  );
};

export default Nine;
