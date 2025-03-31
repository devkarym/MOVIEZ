import React from 'react'
import MovieCard from '../MovieCard'

export default function MoviesList({movies}) {
  return (
    <div className='w-full flex gap-2 overflow-x-auto p-2'>
        {
            movies.map((movie) => {
                return <MovieCard movie = {movie}></MovieCard>
            })
        }
    </div>
  )
}
