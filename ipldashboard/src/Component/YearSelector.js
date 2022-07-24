import React from "react";
import { Link } from "react-router-dom";

const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  console.log(startYear);

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return (
    <ol className="year-selector--list">
      {years.map((year) => (
        <li>
          <Link to={`/teams/${teamName}/matches/${year}`}> {year} </Link>
        </li>
      ))}
          <li>
              <Link to={`/teams`}>HOME</Link>
        </li>
          
    </ol>
  );
};

export default YearSelector;
