import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./Scheduler.module.css";

const Scheduler = ({ teams }) => {
  const [scheduledMatches, setScheduledMatches] = useState([]);

  const [matchDates, setMatchDates] = useState({});

  const generateMatches = () => {
    const allMatches = [];

    teams.forEach((homeTeam, index) => {
      teams.forEach((awayTeam, innerIndex) => {
        if (index !== innerIndex) {
          // Home and Away match
          allMatches.push({ home: homeTeam, away: awayTeam, date: null });
        }
      });
    });

    setScheduledMatches(allMatches);
  };

  const handleDateChange = (date, matchIndex) => {
    const updatedDates = { ...matchDates, [matchIndex]: date };
    setMatchDates(updatedDates);

    const updatedMatches = [...scheduledMatches];
    updatedMatches[matchIndex].date = date;
    setScheduledMatches(updatedMatches);
  };

  return (
    <div>
      <button onClick={generateMatches}>Generate Season Matches</button>
      <div className={styles["match-list"]}>
        {scheduledMatches.map((match, index) => (
          <div key={index} className={styles.match}>
            <div>{match.home} vs {match.away}</div>
            <DatePicker
              selected={matchDates[index]}
              onChange={(date) => handleDateChange(date, index)}
              placeholderText="Select a date"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scheduler;
