import MovieCard from './components/MovieCard';
import './styles.css';
const Catalog = () => (
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

export default Catalog;