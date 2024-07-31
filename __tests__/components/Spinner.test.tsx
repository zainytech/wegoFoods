import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '@/components/Spinner';

describe('Loading Component', () => {
  it('should render the spinner wrapper', () => {
    render(<Loading />);
    const spinnerWrapper = screen.getByTestId('spinner-wrapper');
    expect(spinnerWrapper).toBeInTheDocument();
    expect(spinnerWrapper).toHaveClass('spinnerWarpper');
  });

  it('should render the loader', () => {
    render(<Loading />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });
});
