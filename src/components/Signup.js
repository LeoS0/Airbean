import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { changeStatus, userDetails } from '../actions/profileActions';
import Icon from '../images/icon.svg';

function Signup() {
  const dispatch = useDispatch();

  const [userExists, setUserExists] = useState();
  const [correctUser, setCorrectUser] = useState();
  const [signStatus, setSignStatus] = useState(true);

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

  function handleSignup(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8000/api/account', values)
      .then((response) => {
        if (response.data === true) {
          dispatch(userDetails(values));
          dispatch(changeStatus(true));
        } else {
          setUserExists(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSignIn(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8000/api/signIn', values)
      .then((response) => {
        if (response.data !== false) {
          dispatch(userDetails(response.data));
          dispatch(changeStatus(true));
        } else {
          setCorrectUser(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {signStatus ? (
        <div className="wrapper login">
          <div className="info">
            <img src={Icon} alt="Icon" />
            <h1>Logga In!</h1>
            <p>Genom att logga in på ditt konto kan du spara och se din orderhistorik.</p>
          </div>
          <form onSubmit={handleSignIn}>
            <input type="text" name="username" value={values.username} placeholder="Your Username" onChange={handleInput} />
            <input type="password" name="password" value={values.password} placeholder="Your Password" onChange={handleInput} />
            {correctUser ? <p style={{ color: 'red', textAlign: 'left' }}>Error: Använder Finns Inte</p> : <></>}
            <div className="cta">
              <input className="loginButton" type="submit" value="Logga In" />
            </div>
          </form>
          <p onClick={() => setSignStatus(!signStatus)} style={{ color: '#000', cursor: 'pointer' }}>
            Skapa ett konto
          </p>
        </div>
      ) : (
        <div className="wrapper signup">
          <div className="info">
            <img src={Icon} alt="Icon" />
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
          </div>
          <form onSubmit={handleSignup}>
            <input type="text" name="username" value={values.username} placeholder="Your Username" onChange={handleInput} />
            <input type="password" name="password" value={values.password} placeholder="Your Password" onChange={handleInput} />
            {userExists ? <p style={{ color: 'red', textAlign: 'left' }}>Error: Använder Finns Redan</p> : <></>}
            <div className="check">
              <input type="radio" id="gdpr" name="gdpr" />
              <label htmlFor="gdpr"> GDPR Ok!</label>
            </div>
            <div className="cta">
              <input className="loginButton" type="submit" value="Skapa Konto" />
            </div>
          </form>
          <p onClick={() => setSignStatus(!signStatus)} style={{ color: '#000', cursor: 'pointer' }}>
            Har du redan ett konto?
          </p>
        </div>
      )}
    </>
  );
}

export default Signup;
