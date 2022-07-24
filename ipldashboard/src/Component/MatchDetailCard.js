import React from 'react'
import { Link } from 'react-router-dom';

const MatchDetailCard = ({ match, teamName }) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute=`/teams/${otherTeam}`
  if (!match) return null;

  return (
    <div className="match-detail--card">
      
      <h3>
        <Link to={otherTeamRoute}>vs {otherTeam}</Link>
      </h3>
      <h4>{match.date}</h4>
      <h5>At {match.venue}</h5>
      <h5>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h5>
    </div>
  );
}

export default MatchDetailCard