"use client";

import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import styles from "./page.module.css";
import Loader from "@/components/Spinner";
import { FoodItem, Category } from "@/components/Interfaces";

const Home: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("All");
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(9);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("/api/category");
      const data = await response.json();
      setCategories(data);
    };

    const fetchFood = async () => {
      const response = await fetch("/api/foodItems");
      const data = await response.json();
      setFoodItems(data.foods);
    };

    const initializeData = async () => {
      try {
        setIsLoading(true);
        await fetchCategory();
        await fetchFood();
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

  return (
    <main className="main">
      <section className={styles.mainWrapper}>
        <div className="searchContainer">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div>
          <div className={styles.navbarWrapper}>
            <Navbar options={categories} onSelect={handleSelect} />
          </div>
          <div className={styles.cardWrap}>
            {isLoading ? (
              <Loader />
            ) : visibleData.length > 0 ? (
              visibleData.map((item) => (
                <div className={styles.card} key={item.id}>
                  <FoodCard
                    name={item.name}
                    image={item.imageUrl}
                    stars={parseFloat(item.rating.toFixed(1)).toString()}
                    time={`${item.minCookTime}-${item.maxCookTime} mins`}
                    isNew={item.isNew}
                    promotion={item.promotion}
                  />
                </div>
              ))
            ) : (
              <p className={styles.noDataMessage}>
                Sorry, no food items to show here.
              </p>
            )}
          </div>
          {visibleItemsCount < filteredData.length && (
            <div className={styles.showMoreContainer}>
              <button
                onClick={handleShowMore}
                className={styles.showMoreButton}
              >
                + Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
