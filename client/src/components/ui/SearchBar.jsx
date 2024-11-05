import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ fetchResult, renderResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (typingTimeout) clearTimeout(typingTimeout);
    //DEBOUNCING THE QUERY CHECK
    setTypingTimeout(
      setTimeout(async () => {
        if (query) {
          try {
            const data = await fetchResult(query);
            setResults(data);
          } catch (error) {
            console.error("Error fetching search results:", error);
          }
        } else {
          setResults([]);
        }
      }, 1000)
    );
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles.iconed}>
        <i className="bx bx-search-alt bx-md" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className={styles["results-container"]}>
        {results.map((item, index) => (
          <div key={index} className="result-item">
            {renderResult(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
