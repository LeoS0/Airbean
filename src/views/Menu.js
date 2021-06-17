import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddCircle } from 'react-ionicons';

import { addToCart } from '../actions/profileActions';
import Cart from '../components/Cart';

import Header from '../images/header.svg';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [counter, changeCounter] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee');
      const data = await response.json();

      setMenu(data.menu);
    }

    document.body.style.background = `url('${Header}') no-repeat, #F3E4E1`;
    getMenu();
  }, []);

  return (
    <>
      <Cart counter={counter} />
      <div className="container menu">
        <h1>Meny</h1>
        <ul>
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <div
                  className="actions"
                  onClick={() => {
                    dispatch(addToCart(item));
                    changeCounter(counter + 1);
                  }}
                >
                  <AddCircle width="40px" height="40px" color="#2F2926" />
                </div>
                <div className="info">
                  <p>{item.title}</p>
                  <span>{item.desc}</span>
                </div>
                <div className="price">{item.price} kr</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom"></div>
    </>
  );
}

export default Menu;
