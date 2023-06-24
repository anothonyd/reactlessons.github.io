import backgroundImage from './support.jpg'; // Import the image using the relative path
import { containerStyle } from '../../styles';
import ComplaintRegister from './ComplaintRegister';

const Eleven = () => {

  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImageRepeat: 'no-repeat' }}>
      <div className='bg-danger-subtle rounded-4 p-3 shadow'>
        <div className='bg-danger bg-opacity-50 rounded-3 p-4 shadow'>
          <ComplaintRegister />
        </div>
      </div>
    </div>
  );
};

export default Eleven;
