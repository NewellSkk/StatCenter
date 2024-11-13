import Card from "../../ui/Card";
import Scheduler from "./Scheduler";
import styles from "./Season.module.css";
const Season =()=>{
    const teams=["a","b","c","d"]
     return <div className={styles.season}>
        <Card width={"full"} title={"Scheduler"}><Scheduler teams={teams}/></Card>
     </div>
}
export default Season;