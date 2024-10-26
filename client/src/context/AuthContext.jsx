import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../util/axios";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userID:null,
  loading: true,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userID,setUserID]=useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let logInfo = localStorage.getItem("isLoggedIn");
    if (logInfo === "1") {
      setIsLoggedIn(true);
      setUserID(localStorage.getItem("userID"));
      
    }
    setLoading(false);
  }, []);

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      if (response.data.success) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userID", response.data.userID);
        setIsLoggedIn(true);
        nav("/admin");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while trying to log in. Please try again.");
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    nav("/admin/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userID:userID,
        loading: loading,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
