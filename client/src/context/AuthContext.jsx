import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../util/axios";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loading: true,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let logInfo = localStorage.getItem("isLoggedIn");
    if (logInfo === "1") {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const loginHandler = async (email, password) => {
    try {
      console.log(email,password)
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      if(response.data.success){
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
        nav("/admin");
      }else{
        alert(response.data.message)
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while trying to log in. Please try again.");
    }
  
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    nav("/admin/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
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
