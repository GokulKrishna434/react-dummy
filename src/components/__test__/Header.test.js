import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import appStore from '../../utils/appStore';

it('Should load header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  expect(loginButton).toBeInTheDocument();
});

it('Should load header component with cart 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartButton = screen.getByText('Cart (0)');

  expect(cartButton).toBeInTheDocument();
});

it('Should load header component with cart', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartButton = screen.getByText(/Cart/);

  expect(cartButton).toBeInTheDocument();
});

it('Should change login button to logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' });

  expect(logoutButton).toBeInTheDocument();
});
