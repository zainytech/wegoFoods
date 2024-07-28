import React, { useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  onSelect: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => {
  const options = ['All', 'Sushi', 'Pizza', 'Burgers','Hot Meals', 'Desserts', 'Drinks'];
  const [activeOption, setActiveOption] = useState<string>('All'); // Default to 'All'

  const handleClick = (option: string) => {
    setActiveOption(option);
    onSelect(option);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {options.map(option => (
          <li
            key={option}
            className={`${styles.navItem} ${activeOption === option ? styles.active : ''}`}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
