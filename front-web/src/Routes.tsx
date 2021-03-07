import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Catalog from "./core/pages/Catalog";
import PrivateRoute from "./core/components/Navbar/Routes/PrivateRouter";
import Login from "./core/pages/Login";
import history from "./core/utils/history";

const Routes = () => (
    <Router history={history}>
    <Navbar/>
        <Switch>
            <Route path='/' exact>
                <Login/>
            </Route>
            <PrivateRoute path='/catalog'>
                <Catalog/>
            </PrivateRoute>
        </Switch>
    </Router>
);
export default Routes;