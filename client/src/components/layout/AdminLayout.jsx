import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "../ui/button/Button";
import logo from "../../assets/images/league-logo.png";
import styles from "./AdminLayout.module.css";
const AdminLayout = (props) => {
  const AuthCtx = useContext(AuthContext);
  return (
    <>
      <header className={styles["main-header"]}>
        {/* <span><img className={styles.logo} src={logo}/></span> */}
        <h1>A typical page header</h1>
        <Button className={styles["logout-button"]} onClick={AuthCtx.onLogout}>
          SignOut
        </Button>
      </header>
      {props.children}
    </>
  );
};
export default AdminLayout;
