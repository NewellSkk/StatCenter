import React, { useState } from "react";
import styles from "../AdminForms.module.css";
import Button from "../../ui/Button";

const NewUserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email });
      setName("");
      setEmail("");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">NAME</label>
        <span className={styles.iconed} >
          <i className="bx bx-group bx-sm"/>
      
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />  </span>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">EMAIL</label>
        <span className={styles.iconed}>
            <i className="bx bx-envelope bx-sm"/>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        </span>
       
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default NewUserForm;
