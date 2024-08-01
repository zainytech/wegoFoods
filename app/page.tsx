"use client";

import SearchInput from "@/components/SearchInput";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import styles from "./page.module.css";
import Loader from "@/components/Spinner";
import useData from "@/hooks/useData";

const Home: React.FC = () => {
  const {
    categories,
    visibleData,
    visibleItemsCount,
    filteredData,
    isLoading,
    handleSelect,
    handleShowMore,
    handleSearch,
  } = useData();

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
