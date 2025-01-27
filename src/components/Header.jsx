import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';

const Header = () => {
  const [btnLabel, setBtnLabel] = useState('Login');

  return (
    <div className="header">
      <div className="header-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
