import React, { useState } from "react";
import MatchDetailCard from "../Component/MatchDetailCard";
import { MatchSmallCard } from "../Component/MatchSmallCard";
import { Link, useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  console.log(teamName);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8082/teams/${teamName}`);

      const data = await response.json();
      setTeam(data);
    };

    fetchData();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team Not found</h1>;
  }
  return (
    <div className="team-page">
      <div className="team-page-name">
        <h1 className="team--name">{team.teamName}</h1>
      </div>
      <div className="team-page-win-loss">
        <PieChart
          data={[
            {
              title: "Two",
              value: team.totalMatches - team.totalWins,
              color: "#C13C37",
            },
            { title: "One", value: team.totalWins, color: "green" },
          ]}
        />
        Wins / Losses
      </div>
      <div className="team-page-detail--card">
        <h2>Latest Match</h2>
        <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard match={match} teamName={team.teamName} />
      ))}
      <div className="team-page--more">
        <Link
          to={`/teams/${team.teamName}/matches/{process.env.REACT_APP_DATA_END_YEAR}`}
        > More ></Link>
      </div>
    </div>
  );
};

export default TeamPage;
