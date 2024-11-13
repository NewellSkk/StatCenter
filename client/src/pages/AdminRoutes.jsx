import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Signin from "../components/admin/Signin";
import ProtectedRoute from "../util/ProtectedRoute";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Season from "../components/admin/season/Season";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<Signin />} />
      <Route path="/" element={<ProtectedRoute><AdminLayout><Outlet/></AdminLayout></ProtectedRoute>}>
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/season" element={<Season/>}/>
      </Route>
    </Routes>
  );
};
export default AdminRoutes;
