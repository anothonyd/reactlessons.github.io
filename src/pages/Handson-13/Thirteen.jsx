import backgroundImage from './abstract.jpg'; // Import the image using the relative path
import { containerStyle } from '../../styles';
import GetUserCard from './GetUserCard';

const Nine = () => {

  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImageRepeat: 'no-repeat' }}>
      <div className='bg-info-subtle rounded-3 p-1 shadow'>
        <div className='bg-info bg-opacity-50 rounded-3 p-4 shadow'>
          <GetUserCard />
        </div>
      </div>
    </div>
  );
};

export default Nine;
