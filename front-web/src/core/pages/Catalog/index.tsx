import { useEffect } from 'react';
import { makePrivateRequest } from '../../utils/request';
import MovieCard from './components/MovieCard';
import './styles.css';

const Catalog = () => {
    
    useEffect(() =>{
        makePrivateRequest({url:'/movies'})
        .then(response => console.log(response));
    }, []);
    return(
        <div className='catalog-container'>
            <div className='catalog-content'>
                <div className="catalog-filter">
                    <h1>Aventura</h1>
                </div>
                <div className="catalog-movies">
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;