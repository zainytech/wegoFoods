import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';
import { Category } from '@/components/Interfaces';

describe('Navbar Component', () => {
  const mockCategories: Category[] = [
    { id: '1', name: 'Sushi' },
    { id: '2', name: 'Pizza' },
    { id: '3', name: 'Burgers' },
    { id: '4', name: 'Hot Meals' },
    { id: '5', name: 'Desserts' },
    { id: '6', name: 'Drinks' },
  ];

  it('should render all navigation options', () => {
    render(<Navbar options={mockCategories} onSelect={() => {}} />);

    const options = ['All', 'Sushi', 'Pizza', 'Burgers', 'Hot Meals', 'Desserts', 'Drinks'];
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('should call onSelect with correct option when an item is clicked', () => {
    const mockOnSelect = jest.fn();
    render(<Navbar options={mockCategories} onSelect={mockOnSelect} />);

    fireEvent.click(screen.getByText('Pizza'));

    expect(mockOnSelect).toHaveBeenCalledWith('2');
  });

  it('should apply active class to the selected option', () => {
    render(<Navbar options={mockCategories} onSelect={() => {}} />);

    expect(screen.getByText('All')).toHaveClass('active');

    fireEvent.click(screen.getByText('Pizza'));

    expect(screen.getByText('Pizza')).toHaveClass('active');
    expect(screen.queryByText('All')).not.toHaveClass('active');
  });
});
