
export const fetchCategories = async () => {
    const response = await fetch("/api/category");
    return response.json();
  };
  
  export const fetchFoodItems = async () => {
    const response = await fetch("/api/foodItems");
    return response.json();
  };
  