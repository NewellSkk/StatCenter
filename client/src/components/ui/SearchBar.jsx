import React, { useState } from "react";
import axios from "../../util/axios";

import styles from "./SearchBar.module.css";

const SearchBar = ({url,displayProp}) => {
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
                  const response = await axios.get(`${url}?q=${query}`);
                  setResults(response.data);
                } catch (error) {
                  console.error("Error fetching search results:", error);
                }
              } else {
                setResults([]); 
              }
        },2000)
    )

  
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles.iconed}>
        <i className="bx bx-search-alt bx-md"/>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className={styles["results-container"]}>
        {results.map((doc) => (
          <div key={doc._id} className={styles["result-item"]}>
            {doc[displayProp]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
