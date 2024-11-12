import styles from "./TeamsDisplay.module.css";
import badge from "../../../assets/badges/archers.png";

const TeamCard = ({ badgeUrl, teamName, onViewClick }) => {
  return (
    <div className={styles["team-card"]}>
      <img src={badgeUrl} alt={`${teamName} badge`} className={styles["team-badge"]} />
      <h3 className={styles["team-name"]}>{teamName}</h3>
      <button className={styles["view-button"]} onClick={onViewClick}>
        View
      </button>
    </div>
  );
};

const TeamsDisplay = () => {
  return (
    <div className={styles.teams}>
      <TeamCard badgeUrl={badge} teamName={"STARS"} />
      <TeamCard badgeUrl={badge} teamName={"STARS"} />
      

    </div>
  );
};
export default TeamsDisplay;
