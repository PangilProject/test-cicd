import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD text', () => {
  render(<App />);
  const element = screen.getByText(/CI\/CD/i); // 정규표현식도 수정
  expect(element).toBeInTheDocument();
});