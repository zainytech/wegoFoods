import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';

describe('Navbar Component', () => {
  it('should render all navigation options', () => {
    render(<Navbar onSelect={() => {}} />);

    const options = ['All', 'Sushi', 'Pizza', 'Burgers', 'Hot Meals', 'Desserts', 'Drinks'];
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('should call onSelect with correct option when an item is clicked', () => {
    const mockOnSelect = jest.fn();
    render(<Navbar onSelect={mockOnSelect} />);

    fireEvent.click(screen.getByText('Pizza'));

    expect(mockOnSelect).toHaveBeenCalledWith('Pizza');
  });

  it('should apply active class to the selected option', () => {
    render(<Navbar onSelect={() => {}} />);

    expect(screen.getByText('All')).toHaveClass('active');

    fireEvent.click(screen.getByText('Pizza'));

    expect(screen.getByText('Pizza')).toHaveClass('active');

    expect(screen.queryByText('All')).not.toHaveClass('active');
  });
});
