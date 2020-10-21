import React, { useEffect, useState } from 'react';
import Movie from '../Movie';

const API_KEY = 'c6c6506b';

const series = ['avengers', 'fast and furious', 'iron man', 'harry potter']
const Movies: React.FC = props => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const promises = series.map(series => {

            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&y-2019&apikey=${API_KEY}&page=1
            `)
            .then(res => res.json())
        })
        Promise.all(promises).then((movies: any) => {
            setMovies(movies)
        })
    }, [])

    return <div className="movie">
            {movies.map((movie: Movie) => {
                return <Movie 
                key= {movie.imdbID}
                title={movie.title}
                year={movie.year}
                image={movie.image}
            />
            })}
        </div>

}

export default Movies;