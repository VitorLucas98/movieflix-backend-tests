import { useParams } from 'react-router';
import './styles.css';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () =>{
    const { movieId } = useParams<ParamsType>();

    return(
        <div>
            <h1>MovieDetails</h1>
        </div>
    );
}

export default MovieDetails;