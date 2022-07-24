import React, { useEffect, useState } from 'react'
import MatchDetailCard from "../Component/MatchDetailCard";
import { useParams } from "react-router-dom";

import "./MatchPage.css"
import YearSelector from '../Component/YearSelector';


const MatchPage = () => {
    const [match , setMatch] = useState([])

    const {teamName,year} = useParams()

    useEffect(() => {
      console.log("Hello Wolrd");
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:8082/teams/${teamName}/matches?year=${year}`
        );

        const data = await response.json();
        setMatch(data);
      };

      fetchData();
    }, [teamName,year]);
  return (
    <div className="match--page">
      <div className='year--selector'>
        <h3>Select Year</h3>  
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <span className='match--page-match'>{teamName} Matches in Year {year }</span>
        {match.slice(1).map((match) => (
          <MatchDetailCard match={match} teamName={teamName} />
        ))}
      </div>
    </div>
  );
}

export default MatchPage