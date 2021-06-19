import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { addToStatus, addToHistory, resetCart, changeQuantity } from '../actions/profileActions';
import CartIcon from '../images/carticon.svg';
import { RemoveCircleOutline, ChevronUpOutline, ChevronDownOutline } from 'react-ionicons';

function Cart({ counter }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector((state) => {
    return state.cart;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  const [values] = useState({ menuID: cartItems.menuID, userID: user.id });

  const [cart, cartToggle] = useState(false);
  const [sale, setSale] = useState(false);

  function toggleCart() {
    cartToggle(!cart);

    let conditionOne = false;
    let conditionTwo = false;

    for (let i = 0; cartItems.length > i; i++) {
      if (cartItems[i].title === 'Bryggkaffe') {
        conditionOne = true;
      }
      if (cartItems[i].title === 'Gustav Adolfsbakelse') {
        conditionTwo = true;
      }
    }

    if (conditionOne === conditionTwo) {
      setSale(true);
    }
  }

  function checkout(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8000/api/order', values)
      .then((respone) => {
        dispatch(addToStatus(respone.data));
        dispatch(addToHistory(cartItems));
        dispatch(resetCart([]));
        history.push('/status');
      })
      .catch((error) => {
        history.push('/menu');
      });
  }

  function removeItem(id) {
    const newItems = cartItems.filter((item) => item.id !== id);
    dispatch(resetCart(newItems));
  }

  function increaseQuantity(id) {
    for (let i = 0; cartItems.length > i; i++) {
      if (cartItems[i] === cartItems[id]) {
        cartItems[id].quantity += 1;
        dispatch(changeQuantity(cartItems));
      }
    }
  }

  function decreaseQuantity(id) {
    for (let i = 0; cartItems.length > i; i++) {
      if (cartItems[i] === cartItems[id] && cartItems[id].quantity > 1) {
        cartItems[id].quantity -= 1;
        dispatch(changeQuantity(cartItems));
      }
    }
  }

  return (
    <>
      <div className="cart" onClick={toggleCart}>
        <img src={CartIcon} alt="close" />
        <span className="counter">{counter}</span>
      </div>
      {cart ? (
        <div className="cart-modal">
          <div className="wrapper">
            <h1>Din Beställning</h1>
            <ul>
              {cartItems.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="info">
                      <p>{item.title}</p>
                      <span>{item.price * item.quantity} kr</span>
                    </div>
                    <div className="actions">
                      <div className="quantity">
                        <ChevronUpOutline width="18px" height="18px" onClick={() => increaseQuantity(index)} />
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={() => {
                            console.log('change');
                          }}
                        />
                        <ChevronDownOutline width="18px" height="18px" onClick={() => decreaseQuantity(index)} />
                      </div>
                      <div className="remove" onClick={() => removeItem(item.id)}>
                        <RemoveCircleOutline />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="checkout">
              <div className="total">
                {cartItems.length > 0 ? (
                  <>
                    <h3>Total</h3>
                    {sale ? (
                      <p>
                        {cartItems.map((item) => item.price * item.quantity).reduce((numberX, numberY) => numberX + numberY - 21)} kr (21kr Rabbat)
                      </p>
                    ) : (
                      <>
                        <p>{cartItems.map((item) => item.price * item.quantity).reduce((numberX, numberY) => numberX + numberY)} kr</p>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
              {cartItems.length > 0 ? (
                <>
                  <span>inkl moms + drönarleverans</span>
                  <button onClick={checkout}>Take my money!</button>
                </>
              ) : (
                <>Din varukorg är tom!</>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Cart;
