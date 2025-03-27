import React from 'react'

export default function MovieCard({ movie }) {
    return (
        <div className="bg-amber-950 p-4 rounded text-neutral-50 flex flex-col gap-4 w-1/2">
            <h1>{movie.title}</h1>
            <div>
                <p>NOTA: <span>{movie.rate}</span></p>
                <p>GÊNERO: <span>{movie.gender}</span></p>
                <p>DIREÇÃO: <span>{movie.directed}</span></p>

            </div>

        </div>
    )
}
