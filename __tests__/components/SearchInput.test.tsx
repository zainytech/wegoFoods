import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '@/components/SearchInput';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('SearchInput Component', () => {
  it('should render input field and search icon', () => {
    render(<SearchInput onSearch={() => {}} />);
    expect(screen.getByPlaceholderText('Enter restaurant name...')).toBeInTheDocument();
    expect(screen.getByAltText('Search Icon')).toBeInTheDocument();
  });

  it('should call onSearch with correct value when input changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    fireEvent.change(screen.getByPlaceholderText('Enter restaurant name...'), {
      target: { value: 'Pizza' },
    });

    expect(mockOnSearch).toHaveBeenCalledWith('Pizza');
  });

  it('should update input value on change', () => {
    render(<SearchInput onSearch={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText('Enter restaurant name...'), {
      target: { value: 'Burger' },
    });

    expect(screen.getByPlaceholderText('Enter restaurant name...')).toHaveValue('Burger');
  });
});
