import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(m => (
        <div>
          {m.title} | {`${m.time} min.`}
          <ul>
            {m.genres.map(g => <li>{g}</li>)}
          </ul>
        </div>
      )
    )
  }
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
