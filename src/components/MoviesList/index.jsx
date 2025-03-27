import React from 'react'
import MovieCard from '../MovieCard'

export default function MoviesList({movies}) {
  return (
    <div className='w-full flex flex-col'>
        {
            movies.map((movie) => {
                return <MovieCard movie = {movie}></MovieCard>
            })
        }
    </div>
  )
}
