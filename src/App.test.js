// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Home page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeElement = screen.getByText(/Home Page/i);
  expect(homeElement).toBeInTheDocument();
});
