import React, { useContext, useState } from "react";
import styles from "./Signin.module.css";
import AuthContext from "../../context/AuthContext";
import Button from "../ui/button/Button";

let Signin = () => {
  const AuthCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthCtx.onLogin(email, password);
  };

  return (
    <div className={styles.bg}>
      <div className={styles["signin-container"]}>
        <h2 className={styles["signin-title"]}>Sign In</h2>
        <form className={styles["signin-form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className={styles["signin-button"]}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Signin;
