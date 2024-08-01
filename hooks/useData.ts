
import { useState, useEffect } from "react";
import { fetchCategories, fetchFoodItems } from "@/utils/fetchData";
import { FoodItem, Category } from "@/components/Interfaces";

const useData = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("All");
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(9);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoading(true);
        const [categoryData, foodData] = await Promise.all([
          fetchCategories(),
          fetchFoodItems(),
        ]);
        setCategories(categoryData);
        setFoodItems(foodData.foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  const handleSelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setVisibleItemsCount(9);
  };

  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + 9);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleItemsCount(9);
  };

  const filteredData = foodItems.filter((item) => {
    const matchesCategory =
      selectedCategoryId === "All" || item.categoryId === selectedCategoryId;
    const matchesSearch = item.restaurant
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleData = filteredData.slice(0, visibleItemsCount);

  return {
    categories,
    visibleData,
    visibleItemsCount,
    filteredData,
    isLoading,
    handleSelect,
    handleShowMore,
    handleSearch,
  };
};

export default useData;
