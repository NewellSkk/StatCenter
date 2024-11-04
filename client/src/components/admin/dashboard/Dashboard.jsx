import Card from "../../ui/Card";
import NewUserForm from "./NewUserForm";
import styles from "./Dashboard.module.css";
import axios from "../../../util/axios";

const Dashboard = () => {
  const newUserHandler=async({name,email})=>{
    try {
      const response= await axios.post("/api/register/user",{name,email})
      if(response.data.success){
        window.alert(response.data.message)
      }else{
        window.alert(response.data.message)
      }
    } catch (error) {
      console.log("ERROR:"+ error);
    }
  }
  return (
    <div className={styles.dashboard}>
         <Card width={"quarter"} title="Add User"><NewUserForm onSubmit={newUserHandler}/></Card>
      <Card width={"quarter"}>quarter</Card>
      <Card width={"half"}>half</Card>
      <Card width={"quarter"}>quarter</Card>
      
      <Card width={"quarter"}>quarter</Card>
      <Card width={"full"}>One</Card>
      <Card width={"half"}>Half</Card>
      <Card width={"half"}>Half</Card>
     
    </div>
  );
};
export default Dashboard;
