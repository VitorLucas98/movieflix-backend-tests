import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination';
import { Genre, MovieResponse } from '../../../../utils/types';
import { makePrivateRequest } from '../../../../utils/request';
import MovieCard from '../MovieCard';
import Select from 'react-select';
import './styles.css';
import MovieCardLoader from '../MovieCardLoader';

const CatalogMovies = () => {
    const [movieResponse, setMovieResponse] = useState<MovieResponse>();
    const [activePage, setActivePage] = useState(0);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genre, setGenre] = useState<Genre>();
    const [isLoading, setIsLoading] = useState(false);

    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 10,
            genreId: genre?.id
        }
        setIsLoading(true)
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMovieResponse(response.data))
            .finally(() => setIsLoading(false));
    }, [activePage, genre]);
    useEffect(() => {
        getMovies()
    }, [getMovies]);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenres(false));
    }, []);

    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0)
        setGenre(genre);
    }

    return (
        <div className='movies-container'>
            <div className="movie-filter-container">
                <Select
                    name='generos'
                    options={genres}
                    isLoading={isLoadingGenres}
                    getOptionLabel={(option: Genre) => option.name}
                    getOptionValue={(option: Genre) => String(option.id)}
                    classNamePrefix='genre-select'
                    placeholder='Generos'
                    inputId='genero'
                    onChange={value => handleChangeGenre(value as Genre)}
                    isClearable
                />
            </div>
            <div className="catalog-movies">
                {isLoading ? <MovieCardLoader /> : (
                    movieResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>
            {movieResponse &&
                <Pagination
                    onChange={page => setActivePage(page)}
                    totalPages={movieResponse.totalPages}
                    activePage={activePage} />}
        </div>
    );
}

export default CatalogMovies;