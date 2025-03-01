import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Tests', () => {
  it('should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it('should load button inside contact component', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should load input name inside contact component', () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText('name');

    expect(nameInput).toBeInTheDocument();
  });

  it('should load 2 inputs inside contact component', () => {
    render(<Contact />);

    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toBe(2);
  });
});
