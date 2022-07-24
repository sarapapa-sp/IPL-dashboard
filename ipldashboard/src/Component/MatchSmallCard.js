import React from 'react'
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div
      className={
        isMatchWon
          ? "match-small--card won-card"
          : "match-small--card lost-card"
      }
    >
      <span className="vs">vs</span> <br></br>
      <span className="other--team">
        <Link to={otherTeamRoute}> {otherTeam}</Link>
      </span>
      <p>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}
