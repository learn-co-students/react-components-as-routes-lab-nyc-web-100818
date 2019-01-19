import React from 'react'
import { actors } from '../data'

const Actors = () => {
  return (
    <div>
      <h1>
        <u>Actors Page</u>
      </h1>
      {actors.map((a, i) => (
        <div>
          <h2>
            <u>{a.name}</u>
          </h2>

          <h3>Hit Movies:</h3>

          <ul>
            {a.movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors
