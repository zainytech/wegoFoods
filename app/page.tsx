"use client";

import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import Navbar from "@/components/Navbar";
import FoodCard from "../components/FoodCard";
import styles from "./page.module.css";

interface FoodItem {
  hotelName: string;
  image: string;
  stars: string;
  time:string;
  type: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<FoodItem[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("All");
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(9);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/foodData.json");
      const jsonData: FoodItem[] = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [data]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setVisibleItemsCount(9);
  };

  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + 9);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleItemsCount(9);
  };

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedOption === "All" || item.type === selectedOption;
    const matchesSearch = item.hotelName
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
            <Navbar onSelect={handleSelect} />
          </div>
          <div className={styles.cardWrap}>
          {visibleData.length > 0 ? (
            visibleData.map((item, index) => (
              <div className={styles.card} key={item.hotelName}>
                <FoodCard
                  key={index}
                  hotelName={item.hotelName}
                  image={item.image}
                  stars={item.stars}
                  time={item.time}
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
