import React from "react";
import Image from "next/image";
import searchIcon from "@/public/searchIcon.svg"; 
import styles from "./SearchInput.module.css";
import { useState } from "react";
interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    onSearch(query);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter restaurant name..."
        className={styles.inputField}
        value={inputValue}
      onChange={handleChange}
      />
      <div className={styles.iconContainer}>
        <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchInput;

