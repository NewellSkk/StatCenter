import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import PasswordChanger from "../ui/PasswordChanger";

import styles from "./AdminLayout.module.css";
const AdminLayout = (props) => {
  const AuthCtx = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      {modalOpen && (
        <Modal
          onClose={handleModalClose}
          header={<h2>Edit User Details</h2>}
          content={<PasswordChanger/>}
          actions={
            <>
              <button onClick={handleModalClose}>Close</button>
              <button onClick={() => alert("Confirmed!")}>Confirm</button>
            </>
          }
        />
      )}
      <div className={styles["admin-layout"]}>
        {/* Sidebar navigation */}
        <nav className={styles["admin-sidebar"]}>
          <h3>
            USER:
            <Button className={styles["sidebar-button"]} onClick={handleModalOpen}>
              {localStorage.getItem("username")}
            </Button>
          </h3>
          <ul>
            <li>
              <NavLink
                to={"/admin"}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dash
              </NavLink>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
          <Button
            className={styles["sidebar-button"]}
            onClick={AuthCtx.onLogout}
          >
            SignOut
          </Button>
        </nav>

        <div className={styles["admin-content"]}>{props.children}</div>
      </div>
    </>
  );
};
export default AdminLayout;
