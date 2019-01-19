import React from 'react'
import { movies } from '../data'

const Movies = () => {
  const movieJsx = movies.map((m, i) => (
    <div key={i}>
      <h2>
        <u>Title</u>: {m.title}
      </h2>
      <p>
        <u>Time</u>: {m.time}
      </p>
      <p>
        <u>Genres</u>:
      </p>
      <ul>
        {m.genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieJsx}
    </div>
  )
}

export default Movies
