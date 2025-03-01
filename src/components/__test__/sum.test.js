import { sum } from '../sum';

test('Sum should add the two numbers', () => {
  const total = sum(3, 4);

  expect(total).toBe(7);
});
