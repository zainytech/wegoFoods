export interface FoodItem {
  id: string;
  index: number;
  rating: number;
  promotion: string;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface NavbarProps {
  options: Category[];
  onSelect: (categoryId: string) => void;
}
export interface FoodCardProps {
  name: string;
  image: string;
  stars: string;
  time: string;
  isNew: boolean;
  promotion: string;
}
export interface SearchInputProps {
  onSearch: (query: string) => void;
}
