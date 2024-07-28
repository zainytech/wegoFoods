import React from "react";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.svg"; 
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter restaurant name..."
        className={styles.inputField}
      />
      <div className={styles.iconContainer}>
        <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchInput;
