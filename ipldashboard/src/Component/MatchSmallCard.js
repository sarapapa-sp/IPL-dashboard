import React from 'react'
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="match-small--card">
      <h3>
        <Link to={otherTeamRoute}>vs {otherTeam}</Link>
      </h3>
      <p>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}
