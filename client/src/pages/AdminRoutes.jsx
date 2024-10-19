import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Signin from "../components/admin/Signin";
import ProtectedRoute from "../util/ProtectedRoute";
import AdminLayout from "../components/layout/AdminLayout";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<Signin />} />
      <Route path="/" element={<ProtectedRoute><AdminLayout><Outlet/></AdminLayout></ProtectedRoute>}>
        <Route path="/" element={<p style={{color:"gold"}}>DASHBOARD</p>} />
      </Route>
    </Routes>
  );
};
export default AdminRoutes;
