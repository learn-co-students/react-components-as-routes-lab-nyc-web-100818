import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => (
        <div key={idx}>
          <h3>{director.name}</h3>
          {director.movies.map((movie, idx) => (
            <ul key={idx}>{movie}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directors;
