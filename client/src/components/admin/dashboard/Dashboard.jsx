import Card from "../../ui/Card";
import NewUserForm from "./NewUserForm";
import SearchBar from "../../ui/SearchBar";
import styles from "./Dashboard.module.css";
import axios from "../../../util/axios";
import Button from "../../ui/Button";
import NewTeamForm from "./NewTeamForm";
import TeamsDisplay from "./TeamsDisplay";
import PlayerReg from "./PlayerReg";

const Dashboard = () => {
  const rank = localStorage.getItem("userRank");
  const newUserHandler = async ({ name, email }) => {
    try {
      const response = await axios.post("/api/user/register", { name, email });
      if (response.data.success) {
        window.alert(response.data.message);
      } else {
        window.alert(response.data.message);
      }
    } catch (error) {
      console.log("ERROR:" + error);
    }
  };
  const fetchUsers = async (query) => {
    const response = await axios.get(`/api/user/search?q=${query}`);
    return response.data;
  };
  const renderUserResult = (user) => (
    <span>
      {user.email}.{user.name}.{<Button>View</Button>}
    </span>
  );
  return (
    <div className={styles.dashboard}>
      {rank == "Owner" && (
        <Card width={"quarter"} title="Add User">
          <NewUserForm onSubmit={newUserHandler} />
        </Card>
      )}
      {rank == "Owner" && (
        <Card width={"half"} title={"Find User"}>
          <SearchBar fetchResult={fetchUsers} renderResult={renderUserResult} />
        </Card>
      )}
      <Card width={"three-fourths"} title={"TEAMS"}>
        <TeamsDisplay />
      </Card>
      <Card width={"quarter"} title={"ADD TEAM"}>
        <NewTeamForm />
      </Card>
      <Card width={"quarter"} title={"Find Player"}>
        <SearchBar fetchResult={fetchUsers} renderResult={renderUserResult} />
      </Card>
  
      <Card width={"three-fourths"} title={"Player Registration"}>
        <PlayerReg />
      </Card>
      
    </div>
  );
};
export default Dashboard;
