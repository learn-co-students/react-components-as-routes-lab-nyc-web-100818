import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map(d => (
        <div>
          {d.name}
          <ul>
            {d.movies.map(m => <li>{m}</li>)}
          </ul>
        </div>
      )
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
