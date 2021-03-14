import { Route, Switch } from 'react-router';
import CatalogMovies from './components/CatalogMovies';
import MovieDetails from './components/MovieDetails';

const Movies = () => (
    <Switch>
        <Route path="/movies" exact>
            <CatalogMovies />
        </Route>
        <Route path="/movies/:movieId">
            <MovieDetails/>
        </Route>
    </Switch>
);

export default Movies;