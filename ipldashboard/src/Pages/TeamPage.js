import React, { useState } from 'react'
import MatchDetailCard from '../Component/MatchDetailCard';
import { MatchSmallCard } from '../Component/MatchSmallCard';
import {useParams} from "react-router-dom"

const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams()
  console.log(teamName)
    
    React.useEffect(() => {
      console.log("Hello Wolrd");
      const fetchData = async () => {
        const response = await fetch(`http://localhost:8082/teams/${teamName}`);

        const data = await response.json();
        setTeam(data);
      };

      fetchData();
    }, [teamName]);
  
  if (!team || !team.teamName) {
    return <h1>Team Not found</h1>
  }
  return (
    <div className='team-page'>
          <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
      {team.matches.slice(1).map(match => <MatchSmallCard match={match} teamName={ team.teamName} />)}
          
    </div>
  );
}

export default TeamPage