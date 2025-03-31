import React from 'react'
import MoviesList from '../MoviesList'
import useFetch from '../../hooks/useFetch';

export default function MoviesSection({title, section}) {

        const { data:movies, loading, error } = useFetch(section);
  return (
    <div className='flex flex-col gap-4 p-6 bg-black'>
        <h2 className='text-white font-bold text-2xl'>{title}</h2>

        <div className='flex gap-4 p-1'>

      { movies && <MoviesList movies={movies.results}>

      </MoviesList>}

        </div>
    </div>
  )
}
