import React from "react";
import styles from './Card.module.css'; // Import the CSS for styling

const Card = ({ children, width,title }) => {
  return (
    <div className={`${styles.card} ${styles[width]}`}>
       {title&& <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Card;