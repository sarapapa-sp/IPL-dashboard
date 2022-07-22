import React from 'react'

export const MatchSmallCard = ({match}) => {
  return (
    <div className="match-small--card">
      <h6>
        {match.team1} vs {match.team2}
      </h6>
    </div>
  );
}
