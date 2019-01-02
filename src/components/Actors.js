import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const mappedActors = actors.map((actor) => {
    return (
      <div>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Actors Page</h1>
      {mappedActors}
    </div>
  );
};

export default Actors;
