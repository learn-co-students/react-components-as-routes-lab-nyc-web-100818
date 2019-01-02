import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const mappedDirectors = directors.map((d) => {
    return (
      <div key={d.name}>
      <h1>Name: {d.name}</h1>
      <h3>Movies:</h3>
        <ul>
          {
            d.movies.map((movie) => {
              return <li key={movie}>{movie}</li>
            })
          }
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {mappedDirectors}
    </div>
  );
}

export default Directors
