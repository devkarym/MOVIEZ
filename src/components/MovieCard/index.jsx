import React from 'react'

export default function MovieCard({ movie }) {

    console.log(movie)
    return (
        <div className="bg-amber-950 p-4 rounded text-neutral-50 flex flex-col gap-4 ">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""  className='min-w-[200px]'/>
            <h1>{movie.title}</h1>
            

        </div>
    )
}
