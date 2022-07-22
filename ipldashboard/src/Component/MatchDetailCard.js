import React from 'react'

const MatchDetailCard = ({ match }) => {
    if (!match) return null;
  return (
      <div className='match-detail--card'>
          <h3>Latest Match</h3>
          <h5>
              {match.team1} vs {match.team2}
          </h5>
    </div>
  )
}

export default MatchDetailCard