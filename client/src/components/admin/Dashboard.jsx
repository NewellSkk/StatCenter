import Card from "../ui/button/Card";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Card width={"full"}>One</Card>
      <Card width={"half"}>One</Card>
      <Card width={"third"}>Two</Card>
      <Card width={"quarter"}>Three</Card>
    </div>
  );
};
export default Dashboard;
