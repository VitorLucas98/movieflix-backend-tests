import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { getSessionData, isMember } from '../../../../utils/auth';
import history from '../../../../utils/history';
import { refreshPage } from '../../../../utils/refresh';
import { makePrivateRequest } from '../../../../utils/request';
import { Movie } from '../../../../utils/types';
import ReviewCard from './components/ReviewCard';
import MovieDetailsLoader from '../Loaders/MovieDetailsLoader';
import './styles.css';

type ParamsType = {
    movieId: string;
}
type FormState = {
    text: string;
    movieId: number;
    user: {
        id: number;
    }
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const { register, handleSubmit, errors } = useForm<FormState>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false))

    }, [movieId]);

    const onSubmit = (data: FormState) => {
        const userData = getSessionData();
        data = { ...data, user: { id: userData.userId }, movieId: Number(movieId) }
        makePrivateRequest({ method: 'POST', url: '/reviews', data })
            .then(() => {
                toast.warning('Avalição salva com sucesso !', { autoClose: 2000, })
                history.push(`/movies/${movieId}`);
                refreshPage();
            })
            .catch(() => {
                toast.error('Error ao salvar avaliação')
                refreshPage();
            })
    }
    return (
        <div className='movie-details-container'>
            <div className="movie-details">
                {isLoading ? <MovieDetailsLoader /> : (
                    <>
                        <img src={movie?.imgUrl}
                            alt="" className='movie-img' />
                        <div className="movie-info-details">
                            <h1 className='movie-title-details'>{movie?.title}</h1>
                            <span className='movie-year-details'>{movie?.year}</span>
                            <p className='movie-subtitle-details'>{movie?.subTitle}</p>
                            <p className='movie-synopsis-details'>{movie?.synopsis}</p>
                        </div>
                    </>
                )}

            </div>
            <div className="movie-comment-container">
                <form onSubmit={handleSubmit(onSubmit)} className='form-content-review'>
                    <textarea
                        ref={register({ required: 'Campo obrigatorio' })}
                        name='text'
                        className='movie-comment'
                        placeholder='Deixe sua avaliação aqui'
                        data-testid='description'
                        disabled={!isMember()}
                    />
                    {errors.text && (
                        <div className="error-feedback">
                            {errors.text.message}
                        </div>
                    )}
                    {!isMember() && (
                        <div className="error-feedback">
                            *Apenas membros podem fazer avalições*
                        </div>
                    )}
                    <div className='btn-comment-container'>
                        <button className='btn-comment' disabled={!isMember()}>
                            <h4>SALVAR AVALIAÇÃO</h4>
                        </button>
                    </div>
                </form>
            </div>
            <div className="reviews-container">
                {movie?.reviews.map(review => <ReviewCard review={review} key={review.id} />)}
            </div>
        </div>
    );
}

export default MovieDetails;