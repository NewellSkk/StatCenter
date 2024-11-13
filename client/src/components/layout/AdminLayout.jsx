import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import PasswordChanger from "../admin/PasswordChanger";
import axios from "../../util/axios";
import styles from "./AdminLayout.module.css";
const AdminLayout = (props) => {
  const AuthCtx = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);

  const handleModalClose = () => setModalOpen(false);

  const passwordChangeHandler = async (oldPass, newPass) => {
    try {
      const id = AuthCtx.userID;
      const response = await axios.post("/api/auth/editPassword", {
        userID: id,
        oldPass: oldPass,
        newPass: newPass,
      });
      if (response.data.success) {
        window.alert(response.data.message);
        setTimeout(() => handleModalClose(), 3000);
      } else {
        window.alert(response.data.message);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      {modalOpen && (
        <Modal
          onClose={handleModalClose}
          header={
            <h2>
              User:{localStorage.getItem("username")}(
              {localStorage.getItem("userRank")})
            </h2>
          }
          content={<PasswordChanger onSubmit={passwordChangeHandler} />}
          actions={
            <>
              <button onClick={handleModalClose}>Close</button>
            </>
          }
        />
      )}
      <div className={styles["admin-layout"]}>
        {/* Sidebar navigation */}
        <button className={styles["menu-toggle"]} onClick={handleSidebarToggle}>
          <i className={`bx ${sidebarOpen ? "bx-x" : "bx-menu"} bx-md`} />
        </button>
        <nav
          className={`${styles["admin-sidebar"]} ${
            sidebarOpen ? styles["active"] : ""
          }`}
          onClick={handleSidebarToggle}
        >
          <h3>
            <button
              className={styles["sidebar-button"]}
              onClick={handleModalOpen}
            >
              <i className="bx bx-user bx-sm" />
              <span className={styles["nav-text"]}>
                :{localStorage.getItem("username")}
              </span>
            </button>
          </h3>
          <ul>
            <li>
              <NavLink
                to={"/admin/dash"}
                className={({ isActive }) => (isActive ? styles.active : "INACTIVE")}
              >
                <i className="bx bx-layout bx-sm" />
                <span className={styles["nav-text"]}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/season"}
                className={({ isActive }) => (isActive ? styles.active : "INACTIVE")}
              >
                <i className="bx bx-calendar bx-sm" />{" "}
                <span className={styles["nav-text"]}>Season</span>
              </NavLink>
            </li>
          </ul>
          <span className={styles.logout}>
            <button
              className={styles["sidebar-button"]}
              onClick={AuthCtx.onLogout}
            >
              <i className="bx bx-log-out bx-sm" />
              <span className={styles["nav-text"]}>SignOut</span>
            </button>
          </span>
        </nav>

        <div className={styles["admin-content"]}>{props.children}</div>
      </div>
    </>
  );
};
export default AdminLayout;
