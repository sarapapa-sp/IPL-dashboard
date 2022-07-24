import React, { useEffect, useState } from 'react'
import MatchDetailCard from "../Component/MatchDetailCard";
import { useParams } from "react-router-dom";
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
    }, [teamName]);
  return (
    <div className="match--page">
      <h1>{teamName}</h1>
      {match.slice(1).map((match) => (
        <MatchDetailCard match={match} teamName={teamName} />
      ))}
    </div>
  );
}

export default MatchPage