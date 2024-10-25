import Card from "../ui/Card";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
         <Card width={"quarter"} title="Sample">quarter</Card>
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
