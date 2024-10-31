import React, { useState, useReducer } from "react";
import styles from "./AdminForms.module.css";

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW":
      return {
        ...state,
        newPassword: action.payload,
        isMatch: action.payload === state.confirmPassword ? true : false,
      };
    case "CONFIRM_NEW":
      return {
        ...state,
        confirmPassword: action.payload,
        isMatch: action.payload === state.newPassword ? true : false,
      };
    default:
      return { ...state };
  }
};

const PasswordChanger = ({ onSubmit }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    newPassword: "",
    confirmPassword: "",
    isMatch: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordState.isMatch) {  
      onSubmit(currentPassword, passwordState.newPassword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={passwordState.newPassword}
          onChange={(e) =>
            dispatchPassword({ type: "SET_NEW", payload: e.target.value })
          }
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="confirmNewPassword">Confirm New Password</label>
        <input
          type="password"
          id="confirmNewPassword"
          value={passwordState.confirmPassword}
          onChange={(e) =>
            dispatchPassword({ type: "CONFIRM_NEW", payload: e.target.value })
          }
          required
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" disabled={!passwordState.isMatch}>
          Change Password
        </button>
      </div>
    </form>
  );
};

export default PasswordChanger;
