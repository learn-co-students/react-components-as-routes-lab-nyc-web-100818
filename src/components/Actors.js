import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx}>
          {actor.name}
          {actor.movies.map((movie, idx) => (
            <ul key={idx}>{movie}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
