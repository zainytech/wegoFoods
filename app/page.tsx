'use client';

import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import Navbar from "@/components/Navbar";
import FoodCard from '../components/FoodCard';
import styles from './page.module.css';

interface FoodItem {
  hotelName: string;
  image: string;
  type: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<FoodItem[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('All');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/foodData.json');
      const jsonData: FoodItem[] = await response.json();
      setData(jsonData);
    };
    
    fetchData();
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const filteredData = selectedOption === 'All' 
    ? data 
    : data.filter(item => item.type === selectedOption);

  return (
    <main className="main">
      <section className={styles.mainWrapper}>

        <div>
          <SearchInput />
        </div>
        
        <div>

          <div className={styles.navbarWrapper}><Navbar onSelect={handleSelect} /></div>

          <div className={styles.cardWrap}>
            {filteredData.map((item, index) => (
              <FoodCard
                key={index}
                hotelName={item.hotelName}
                image={item.image}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;
