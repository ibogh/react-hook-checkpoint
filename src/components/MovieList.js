import React from 'react'
import MovieCard from './MovieCard'
import "./MovieList.css"

function MovieList({movies, searchFilter, rateFilter}) {
    return (
        <div className="movieList">
            {movies.filter((element) => element.rate >= rateFilter).filter((element) => element.title.toUpperCase().includes(searchFilter.toUpperCase())).map((e, i) => <MovieCard movie={e} key={i} />)}
        </div>
    )
}


export default MovieList

