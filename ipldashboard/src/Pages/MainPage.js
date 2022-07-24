import React, { useEffect, useState } from 'react'
import TeamCard from '../Component/TeamCard';

const MainPage = () => {
  const [teams, setTeams] = useState();

  useEffect(
    () => {
      console.log("Hello World");
      const fetchAllTeams = async () => {
        const response = await fetch(
          `http://localhost:8082/teams`
        );

        const data = await response.json();
        setTeams(data);
      };

      fetchAllTeams();
      console.log(teams)
    },[]
  )
  if(!teams) return null
  return (
    <div className="main-page">
      <div className="main-page--header">
        <h1 className='header'> IPL DASHBOARD</h1>
      </div>

      <div className="teams-grid">
        {teams.map(team => <TeamCard teamName={team.teamName} />)}
      </div>
    </div>
  );
}

export default MainPage