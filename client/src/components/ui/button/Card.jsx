import React from "react";
import styles from './Card.module.css'; // Import the CSS for styling

const Card = ({ children, width }) => {
  return (
    <div className={`${styles.card} ${styles[width]}`}>
      {children}
    </div>
  );
};

export default Card;