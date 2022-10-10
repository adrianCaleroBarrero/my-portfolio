import { fireEvent, render, screen } from '@testing-library/react';
import MyProjects from './MyProjects';

window.open = jest.fn();

describe('Given the component Header', () => {
  describe('When the component is rendered', () => {
    test('Then It should be rendered', () => {
      render(<MyProjects />);

      expect(screen.getByText(/My personal projects/i)).toBeInTheDocument();
    });
  });
  describe('When I press the img in the component', () => {
    test('Then should be open the tab', () => {
      render(<MyProjects />);

      const img = screen.getByTestId('github');
      fireEvent.click(img);

      expect(window.open).toHaveBeenCalled();
    });
  });
});
