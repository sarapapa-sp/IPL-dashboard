import React, { useState } from 'react'
import MatchDetailCard from '../Component/MatchDetailCard';
import { MatchSmallCard } from '../Component/MatchSmallCard';


const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    
    React.useEffect(() => {
        console.log("Hello Wolrd") 
        const fetchData = async () => {
            const response = await fetch(
              "http://localhost:8082/teams/Mumbai Indians"
            );

            const data = await response.json()
            

            setTeam(data)
            
            
        } 

        fetchData();
        
    },[])
  return (
    <div>
          <h1>{team.teamName}</h1>
          <MatchDetailCard match={team.matches[0]} />
          {team.matches.slice(1).map(match => <MatchSmallCard match={match} />)}
          
    </div>
  );
}

export default TeamPage