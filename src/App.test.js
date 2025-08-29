import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Clear button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/clear/i);
  expect(buttonElement).toBeInTheDocument();
});
