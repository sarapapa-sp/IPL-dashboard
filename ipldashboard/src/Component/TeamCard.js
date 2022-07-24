import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({teamName}) => {
  return (
    <div className="team-card">
      <h2>
        <Link to={`/teams/${teamName}`}>{teamName}</Link>
      </h2>
    </div>
  );
}

export default TeamCard