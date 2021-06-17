import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Signup from '../components/Signup';
import User from '../components/User';

import Header from '../images/header.svg';

function Profile() {
  useEffect(() => {
    document.body.style.background = `url('${Header}') no-repeat, #2f2926`;
  }, []);

  const isLogged = useSelector((state) => {
    return state.isLogged;
  });

  return <div className="container profile">{isLogged ? <User /> : <Signup />}</div>;
}

export default Profile;
