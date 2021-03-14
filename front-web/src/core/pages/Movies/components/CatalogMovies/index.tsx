import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieResponse } from '../../../../types/Movie';
import { makePrivateRequest } from '../../../../utils/request';
import MovieCard from '../MovieCard';
import './styles.css';

const CatalogMovies = () => {
    const [movieResponse, setMovieResponse] = useState<MovieResponse>();

    useEffect(() =>{
        const params ={
            page: 0,
            linesPerPage: 10
        }
        makePrivateRequest({url:'/movies', params})
        .then(response => setMovieResponse(response.data));
    }, []);
    return(
        <div className='catalog-container'>
            <div className='catalog-content'>
                <div className="catalog-filter">
                    <h1>Aventura</h1>
                </div>
                <div className="catalog-movies">
                 {movieResponse?.content.map(movie=> (
                     <Link to='/movies/1' key={movie.id}><MovieCard movie={movie}/></Link>
                 ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogMovies;