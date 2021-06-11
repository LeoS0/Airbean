import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuOutline, CloseOutline } from 'react-ionicons';

function Navigation() {
  const [nav, toggleNav] = useState(false);

  return (
    <>
      <button className="navButton" onClick={() => toggleNav(!nav)}>
        {nav ? <CloseOutline height="30px" width="30px" /> : <MenuOutline height="30px" width="30px" />}
      </button>
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
