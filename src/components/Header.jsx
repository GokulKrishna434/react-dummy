import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const isOnline = useOnlineStatus();
  const [btnLabel, setBtnLabel] = useState('Login');

  return (
    <div className="header">
      <div className="header-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnLabel === 'Login'
                ? setBtnLabel('Logout')
                : setBtnLabel('Login');
            }}
            className="login"
          >
            {btnLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
