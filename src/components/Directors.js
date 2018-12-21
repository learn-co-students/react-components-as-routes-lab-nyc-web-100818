import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(d => (
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
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
