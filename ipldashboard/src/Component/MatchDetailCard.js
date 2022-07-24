import React from 'react'
import { Link } from 'react-router-dom';

const MatchDetailCard = ({ match, teamName }) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`
  
  const isMatchWon = teamName === match.matchWinner;
  if (!match) return null;

  return (
    <div
      className={
        isMatchWon ? "match-detail--card won-card" : "match-detail--card lost-card"}
    >
      <div>
        <span className="vs">vs</span> <br></br>
        <span className="other--team">
          <Link to={otherTeamRoute}> {otherTeam}</Link>
        </span>
        <h4 className="match--date">{match.date}</h4>
        <h5 className="match--venue">At {match.venue}</h5>
        <h5 className="match--winner">
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h5>
      </div>
      <div className="additional--information">
        <span className="info--label">First Innings</span>
        <br></br>
        <p className="info--data">{match.team1}</p>
        <br></br>
        <span className="info--label">Second Innings</span>
        <br></br>
        <p className="info--data">{match.team2}</p>
        <br></br>
        <span className="info--label">Man of the Match</span>-
        <p className="info--data">{match.playerOfMatch}</p>
        <br></br>
      </div>
    </div>
  );
}

export default MatchDetailCard