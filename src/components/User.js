import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Profile from '../images/profile.svg';

import { addToHistory } from '../actions/profileActions';

function User() {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  const history = useSelector((state) => {
    return state.history;
  });

  let totalSpent = [];

  useEffect(() => {
    async function getHistory() {
      const response = await fetch('http://localhost:8000/api/history/' + user.userID);
      const data = await response.json();

      dispatch(addToHistory(data));
    }

    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container user">
      <div className="user-info">
        <img src={Profile} alt="Profile" />
        <h1>{user.username}</h1>
        <span>you@email.com</span>
      </div>
      <div className="user-history">
        <h2>Order Historik</h2>
        <ul>
          {history.map((item, index) => {
            return (
              <li key={index}>
                <div className="left">
                  <p>#{item.historyID}</p>
                  <span>total ordersumma </span>
                </div>
                <div className="right">
                  <p>{item.historyDate}</p>
                  <span>
                    {}
                    {item.history
                      .map((item) => {
                        totalSpent.push(item.price * item.quantity);
                        return item.price * item.quantity;
                      })
                      .reduce((numberX, numberY) => {
                        return numberX + numberY;
                      })}{' '}
                    kr
                  </span>
                </div>
              </li>
            );
          })}
          {history.length > 0 ? (
            <li className="total">
              <div className="left">
                <p>Total Spenderat</p>
              </div>
              <div className="right">
                <p>{totalSpent.reduce((numberX, numberY) => numberX + numberY)} kr</p>
              </div>
            </li>
          ) : (
            <>Inga tidigare beställningar</>
          )}
        </ul>
      </div>
    </div>
  );
}

export default User;
