import './styles.css';
import { ReactComponent as MovieImage } from './movie.svg'

const MovieCard = () => {
    return (
        <div className='movie-card'>
            <MovieImage />
            <div className="movie-info">
                <h5 className='movie-title'> O retorno do Rei</h5>
                <span className='movie-year'>2013</span>
                <p className='movie-description'>O olho do inimigo está se movendo.</p>
            </div>
        </div>
    );
}

export default MovieCard;