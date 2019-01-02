import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const mappedMovies = movies.map((movie) => {
    return (
      <div key={movie}>
        <h2>Name: {movie.title}</h2>
        <h3>Time: {movie.time} minutes</h3>
        <h4>Genres:</h4>
        <ul>
          {
            movie.genres.map((g) => {
              return <li key={g}>{g}</li>
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {mappedMovies}
    </div>
  );
};

export default Movies;
