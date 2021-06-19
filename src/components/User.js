import { useSelector } from 'react-redux';
import Profile from '../images/profile.svg';

function User() {
  const user = useSelector((state) => {
    return state.user;
  });

  const history = useSelector((state) => {
    return state.history;
  });

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
                  <p>
                    {item.title} #{item.id}
                  </p>
                  <span>total ordersumma </span>
                </div>
                <div className="right">
                  <p>{item.quantity}x</p>
                  <span>{item.price * item.quantity} kr</span>
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
                <p>{history.map((item) => item.price * item.quantity).reduce((numberX, numberY) => numberX + numberY)} kr</p>
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
