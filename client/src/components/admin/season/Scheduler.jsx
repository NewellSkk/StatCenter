import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./Scheduler.module.css";

const Scheduler = ({ teams }) => {
  const [scheduledMatches, setScheduledMatches] = useState([]);
  const [matchDates, setMatchDates] = useState({});
  const [seasonStartDate, setSeasonStartDate] = useState(null);

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
    <form className={styles.schedulerForm}>
      <button type="button" onClick={generateMatches}>
        Generate New Season
      </button>
    
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
      {(scheduledMatches.length>0)&&
      <div>
        <label htmlFor="season-start-date">Season Start Date:</label><br/>
        <DatePicker
          selected={seasonStartDate}
          onChange={(date) => setSeasonStartDate(date)}
          placeholderText="Select start date"
          id="season-start-date"
        />
              <button type="button" onClick={generateMatches}>
        Save
      </button>
      </div>}
    </form>
  );
};

export default Scheduler;
