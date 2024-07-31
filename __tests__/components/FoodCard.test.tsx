import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodCard from '@/components/FoodCard';
import starImg from '@/public/star.svg';
import giftSvg from '@/public/gift.svg';

describe('FoodCard Component', () => {
  const props = {
    name: 'Hotel A',
    image: '/images/hotel-a.jpg',
    stars: '4.5',
    time: '15 min',
    isNew: true,
    promotion: 'gift',
  };

  it('should render the food image', () => {
    render(<FoodCard {...props} />);
    const image = screen.getByAltText('food image');
    expect(image).toBeInTheDocument();
    // expect(image).toHaveAttribute('src', props.image); // This line doesn't work with next/image
  });

  it('should render the hotel name', () => {
    render(<FoodCard {...props} />);
    const hotelName = screen.getByText(props.name);
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

  it('should render promotion icon when promotion is gift', () => {
    render(<FoodCard {...props} />);
    const promotionIcon = screen.getByAltText('gift icon');
    expect(promotionIcon).toBeInTheDocument();
  });

  it('should render "New" label when isNew is true', () => {
    render(<FoodCard {...props} />);
    const newLabel = screen.getByText('New');
    expect(newLabel).toBeInTheDocument();
  });

  it('should not render promotion icon when promotion is null', () => {
    render(<FoodCard {...{ ...props as any, promotion: null }} />);
    const promotionIcon = screen.queryByAltText('gift icon');
    expect(promotionIcon).not.toBeInTheDocument();
  });

  it('should not render "New" label when isNew is false', () => {
    render(<FoodCard {...{ ...props, isNew: false }} />);
    const newLabel = screen.queryByText('New');
    expect(newLabel).not.toBeInTheDocument();
  });
});
