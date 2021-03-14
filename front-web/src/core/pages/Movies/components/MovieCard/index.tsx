import './styles.css';
import { Movie } from '../../../../types/Movie';

type Props = {
    movie: Movie;
}
const MovieCard = ({movie}:Props) => {
    return (
        <div className='movie-card'>
          <img src={movie.imgUrl} alt={movie.title}className='movie-img'/> 
            <div className="movie-info">
                <h5 className='movie-title'>{movie.title}</h5>
                <span className='movie-year'>{movie.year}</span>
                <p className='movie-subtitle'>{movie.subTitle}</p>
            </div>
        </div>
    );
}

export default MovieCard;