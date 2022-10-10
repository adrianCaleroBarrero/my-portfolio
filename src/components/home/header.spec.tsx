import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Given the component Header', () => {
  describe('When the component is rendered', () => {
    test('Then It should be rendered', () => {
      render(<Header />);

      expect(screen.getByText(/Adrian Calero/i)).toBeInTheDocument();
    });
  });
  describe('When I click the button a', () => {
    test('Then It should be call the function scrollTo', () => {
      render(<Header />);

      const a = screen.getByText('About');
      fireEvent.click(a);

      expect(screen.getByText('About')).toBeInTheDocument();
    });
  });
});
