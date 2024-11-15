import React from 'react';

const SeasonGenerator = ({ teams, onGenerateMatches }) => {
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

    onGenerateMatches(allMatches);
  };

  return (
    <button onClick={generateMatches}>
      Generate New Season
    </button>
  );
};

export default SeasonGenerator;
