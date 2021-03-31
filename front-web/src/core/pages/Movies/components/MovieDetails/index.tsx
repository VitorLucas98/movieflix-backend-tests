import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makePrivateRequest } from '../../../../utils/request';
import { Movie } from '../../../../utils/types';
import ReviewCard from './components/ReviewCard';
import './styles.css';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    
    useEffect(() =>{
        makePrivateRequest({ url: `/movies/${movieId}`})
        .then( response => setMovie(response.data))
        
    }, [movieId]);
    
    return (
        <div className='movie-details-container'>
            <div className="movie-details">
                <img src={movie?.imgUrl}
                    alt="" className='movie-img' />
                <div className="movie-info-details">
                    <h1 className='movie-title-details'>{movie?.title}</h1>
                    <span className='movie-year-details'>{movie?.year}</span>
                    <p className='movie-subtitle-details'>{movie?.subTitle}</p>
                    <p className='movie-synopsis-details'>{movie?.synopsis}</p>
                </div>
            </div>
            <div className="movie-comment-container">
                <textarea
                    name='coment'
                    className='movie-comment'
                    placeholder='Deixe sua avaliação aqui'
                    data-testid='description' />
                <div className='btn-comment-container'>
                    <button className='btn-comment'>
                        <h4>SALVAR AVALIAÇÃO</h4>
                    </button>
                </div>
            </div>
            <div className="reviews-container">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
    );
}

export default MovieDetails;