import Logo from '../logo.svg';
import { Navigate } from 'react-ionicons';

function Topbar() {
  return (
    <div className="top">
      <img src={Logo} alt="Logo" width="40" />
      <div className="geolocation">
        <Navigate color={'#fafafa'} />
      </div>
    </div>
  );
}

export default Topbar;
