import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Category,NavbarProps } from "./Interfaces";

const Navbar: React.FC<NavbarProps> = ({ options, onSelect }) => {
  const [activeOption, setActiveOption] = useState<string>("All");

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li
          onClick={() => {
            setActiveOption("All")
            onSelect("All")
          }}
          className={`${styles.navItem} ${
            activeOption === "All" ? styles.active : ""
          }`}
        >
          All
        </li>
        {options.map((category) => (
          <li
            key={category.id}
            className={`${styles.navItem} ${
              activeOption === category.id ? styles.active : ""
            }`}
            onClick={() => {
              onSelect(category.id)
              setActiveOption(category.id);
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
