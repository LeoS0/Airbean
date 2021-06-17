import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavIcon from '../images/navIcon.svg';
import CloseIcon from '../images/closeIcon.svg';

function Navigation() {
  const [nav, toggleNav] = useState(false);

  return (
    <>
      <div className="navButton" onClick={() => toggleNav(!nav)}>
        {nav ? <img src={CloseIcon} alt="close" /> : <img src={NavIcon} alt="nav" />}
      </div>
      {nav ? (
        <div className="navigation">
          <Link to="/menu" onClick={() => toggleNav(!nav)}>
            Meny
          </Link>
          <Link to="/about" onClick={() => toggleNav(!nav)}>
            Vårt kaffe
          </Link>
          <Link to="/profile" onClick={() => toggleNav(!nav)}>
            Min Profil
          </Link>
          <Link to="/status" onClick={() => toggleNav(!nav)}>
            Orderstatus
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navigation;
