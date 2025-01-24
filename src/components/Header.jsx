import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [btnLabel, setBtnLabel] = useState('Login');

  return (
    <div className="header">
      <div className="header-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
