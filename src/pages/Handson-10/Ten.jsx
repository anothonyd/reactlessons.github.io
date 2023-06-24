import backgroundImage from './bootcamp.jpg';
import { containerStyle } from '../../styles';
import Bootcamp from './Bootcamp';

const Ten = () => (
  <div style={{ ...containerStyle,overflow:"scroll" , marginTop:"2rem", backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div>
      <Bootcamp />
    </div>
  </div>
);

export default Ten;
