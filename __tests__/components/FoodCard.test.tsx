import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodCard from '@/components/FoodCard'; 

describe('FoodCard Component', () => {
  const props = {
    hotelName: 'Hotel A',
    image: '/images/hotel-a.jpg',
    stars: '5 stars',
    time: '15 min',
  };

  it('should render the food image', () => {
    render(<FoodCard {...props} />);
    const image = screen.getByAltText('food image');
    expect(image).toBeInTheDocument();
    // expect(image).toHaveAttribute('src', props.image);
  });

  it('should render the hotel name', () => {
    render(<FoodCard {...props} />);
    const hotelName = screen.getByText(props.hotelName);
    expect(hotelName).toBeInTheDocument();
  });

  it('should render the stars and time', () => {
    render(<FoodCard {...props} />);
    const stars = screen.getByText(props.stars);
    const time = screen.getByText(props.time);
    expect(stars).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });

  it('should apply correct styles to the image', () => {
    render(<FoodCard {...props} />);
    const image = screen.getByAltText('food image');
    expect(image).toHaveStyle('width: 100%');
    expect(image).toHaveStyle('height: 15rem');
    expect(image).toHaveStyle('object-fit: cover');
  });
});
