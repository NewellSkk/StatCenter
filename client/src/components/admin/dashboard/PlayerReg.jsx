import React, { useState } from "react";
import styles from "./PlayerReg.module.css";

const PlayerReg = () => {
  const [entries, setEntries] = useState([
    { name: "John Doe", age: 25, team: "Team A" },
    { name: "Jane Smith", age: 28, team: "Team B" },
    { name: "Michael Brown", age: 22, team: "Team C" },
    { name: "John Doe", age: 25, team: "Team A" },
    { name: "Jane Smith", age: 28, team: "Team B" },
    { name: "Michael Brown", age: 22, team: "Team C" },
    { name: "John Doe", age: 25, team: "Team A" },
    { name: "Jane Smith", age: 28, team: "Team B" },
    { name: "Michael Brown", age: 22, team: "Team C" },
  ]);

  const handleApprove = (index) => {
    alert(`Approved: ${entries[index].name}`);
  };

  const handleDeny = (index) => {
    alert(`Denied: ${entries[index].name}`);
  };

  return (
    <div className={styles.playerReg}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.age}</td>
              <td>{entry.team}</td>
              <td>
                <button className={styles.approve} onClick={() => handleApprove(index)}>Approve</button>
                <button className={styles.deny} onClick={() => handleDeny(index)}>Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerReg;
