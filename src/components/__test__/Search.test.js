import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mockData/resListDataMock.json';
import { BrowserRouter } from 'react-router';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should render Body component with search functionality with keyword rest', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const resCardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(resCardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('search');
  fireEvent.change(searchInput, { target: { value: 'rest' } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId('resCard');
  expect(resCardsAfterSearch.length).toBe(3);
});

it('Should render Body component with top rated restaurants functionality', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const resCardsBeforeFilter = screen.getAllByTestId('resCard');
  expect(resCardsBeforeFilter.length).toBe(20);

  const filterBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });
  fireEvent.click(filterBtn);

  const resCardsAfterFilter = screen.getAllByTestId('resCard');
  expect(resCardsAfterFilter.length).toBe(17);
});
