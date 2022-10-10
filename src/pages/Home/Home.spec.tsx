import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from './Home';

window.scrollTo = jest.fn();

describe('Given the page Home', () => {
  describe('When the page is scrolled', () => {
    test('Then It should be scroll to the top', () => {
      document.documentElement.scrollTop = 400;
      render(<Home />);

      fireEvent.scroll(window, { target: { scrollY: 400 } });

      const top = screen.getByAltText(/Go to top arrow/i);
      fireEvent.click(top);

      expect(window.scrollTo).toHaveBeenCalled();
    });
    test('Then It should be in the top of the page', () => {
      document.documentElement.scrollTop = 10;
      render(<Home />);

      fireEvent.scroll(window, { target: { scrollY: 400 } });

      const top = screen.getByAltText(/Go to top arrow/i);

      expect(top).toBeInTheDocument();
    });
  });
});
