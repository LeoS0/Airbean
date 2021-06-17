import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { changeStatus, userDetails } from '../actions/profileActions';
import Icon from '../images/icon.svg';

function Signup() {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userID: Math.floor(Math.random() * 101) + 1,
    username: '',
    password: '',
  });

  function handleInput(event) {
    setValues((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8000/api/account', values)
      .then((respone) => {
        console.log(respone);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(userDetails(values));
    dispatch(changeStatus(true));
  }

  return (
    <div className="wrapper">
      <div className="info">
        <img src={Icon} alt="Icon" />
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={values.username} placeholder="Your Username" onChange={handleInput} />
        <input type="password" name="password" value={values.password} placeholder="Your Password" onChange={handleInput} />
        <div className="check">
          <input type="radio" id="gdpr" name="gdpr" />
          <label htmlFor="gdpr"> GDPR Ok!</label>
        </div>
        <div className="cta">
          <input className="loginButton" type="submit" value="Skapa Konto" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
