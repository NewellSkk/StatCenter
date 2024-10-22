import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "../ui/button/Button";
import logo from "../../assets/images/league-logo.png";
import styles from "./AdminLayout.module.css";
const AdminLayout = (props) => {
  const AuthCtx = useContext(AuthContext);
  return (
    <>
      <div className={styles["admin-layout"]}>
      {/* Sidebar navigation */}
      <nav className={styles["admin-sidebar"]}>
        <h2>Admin</h2>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
        <Button className={styles["logout-button"]} onClick={AuthCtx.onLogout}>
          SignOut
        </Button>
      </nav>

      {/* Main content area */}
      
      <div className={styles["admin-content"]}>
        {props.children}
      </div>
    </div>
    </>
  );
};
export default AdminLayout;
