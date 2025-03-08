import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import MOCK_DATA from '../mockData/resMenuMock.json';
import { BrowserRouter } from 'react-router';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import Cart from '../Cart';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

it('Should load restaurant menu component', async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>,
    ),
  );

  const accordionHeader = screen.getByText(/Mojitos/);
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId('menuItem').length).toBe(7);

  const addBtns = screen.getAllByRole('button', { name: 'Add +' });
  fireEvent.click(addBtns[0]);

  const cartItemOne = screen.getByText('Cart (1)');
  expect(cartItemOne).toBeInTheDocument();

  fireEvent.click(addBtns[0]);
  const cartItemTwo = screen.getByText('Cart (2)');
  expect(cartItemTwo).toBeInTheDocument();

  expect(screen.getAllByTestId('menuItem').length).toBe(9);

  const clearBtn = screen.getByRole('button', { name: 'Clear Cart' });
  fireEvent.click(clearBtn);

  expect(screen.getByText('No items added')).toBeInTheDocument();
});
