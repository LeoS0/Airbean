import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Drone from '../images/drone.svg';

function Status() {
  const history = useHistory();

  useEffect(() => {
    document.body.style.background = '#E5674E';
  }, []);

  const status = useSelector((state) => {
    return state.status;
  });

  return (
    <div className="container status">
      <div className="top">
        <p>
          Ordernummer <strong>#{status.ID}</strong>
        </p>
        <img src={Drone} alt="drone" />
      </div>
      <div className="info">
        <h1>Din beställning är på väg!</h1>
        <p>
          <strong>{status.time}</strong> miunter
        </p>
        <button
          onClick={() => {
            history.push('/menu');
          }}
        >
          Ok, cool!
        </button>
      </div>
    </div>
  );
}

export default Status;
