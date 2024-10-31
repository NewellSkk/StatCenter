import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./pages/AdminRoutes";
import Signin from "./components/admin/Signin";
import "./App.css";
import 'boxicons/css/boxicons.min.css';
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="admin/*" element={<AuthContextProvider><AdminRoutes/></AuthContextProvider>} />
      </Routes>
    </Router>
  );
};

export default App;
