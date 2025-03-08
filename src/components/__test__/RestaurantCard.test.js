import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mockData/resCardMock.json';

it('Should render Restaurant Card with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText('Pizza Hut');

  expect(resName).toBeInTheDocument();
});

it('Should render Restaurant Card with promoted label', () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText('Promoted');

  expect(resName).toBeInTheDocument();
});
