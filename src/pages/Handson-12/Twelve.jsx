import backgroundImage from './nature.jpg'; // Import the image using the relative path
import { containerStyle } from '../../styles';
import Register from './Register';

const Nine = () => {

  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImageRepeat: 'no-repeat' }}>
      <div className='bg-success-subtle rounded-4  p-3 shadow'>
        <div className='bg-success bg-opacity-75 rounded-3 p-4 shadow'>
        <Register />
        </div>
      </div>
    </div>
  );
};

export default Nine;
