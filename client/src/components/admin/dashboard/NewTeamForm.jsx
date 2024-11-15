import React, { useState } from "react";
import styles from "../AdminForms.module.css";
import Button from "../../ui/Button";

const NewTeamForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [manager,setManager] = useState("");
  const [email, setEmail] = useState("");
  const [badge,setBadge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && manager && badge) {
      onSubmit({ name,manager,email,badge });
      setName("");
      setManager("");
      setEmail("");
      setBadge(null);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">NAME</label>
        <span className={styles.iconed} >
          <i className="bx bx-detail bx-sm"/>
      
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
        <label htmlFor="manager">MANAGER</label>
        <span className={styles.iconed}>
            <i className="bx bx-user-circle bx-sm"/>
        <input
          type="text"
          id="manager"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          placeholder="Enter manager"
          required
        />
        </span>
       
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
      <div className={styles.field}>
        <label htmlFor="badge">BADGE</label>
        <span className={styles.iconed}>
            <i className="bx bx-shield-quarter bx-sm"/>
            <input
          type="file"
          id="badge"
          accept="image/png"
          onChange={(e)=>setBadge(e.target.value)}
          required
        />
        </span>
       
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default NewTeamForm;
