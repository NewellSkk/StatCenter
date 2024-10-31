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

  const passwordChangeHandler=async(oldPass,newPass)=>{
    try {
      const id=AuthCtx.userID;
      console.log(localStorage.getItem("userID"));     
      const response=await axios.post('/api/auth/editPassword',{userID:id,oldPass:oldPass,newPass:newPass})
      if(response.data.success){
        window.alert(response.data.message);
        setTimeout(()=>handleModalClose(),3000)
      }else{
        window.alert(response.data.message);
      }
    } catch (error) {
      console.log("ERROR:",error)
    }
  }
  return (
    <>
      {modalOpen && (
        <Modal
          onClose={handleModalClose}
          header={<h2>Edit User Details</h2>}
          content={<PasswordChanger onSubmit={passwordChangeHandler}/>}
          actions={
            <>
              <button onClick={handleModalClose}>Close</button>
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
