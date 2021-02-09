import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Catalog from "./core/pages/Catalog";
import Login from "./core/pages/Login";

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route path='/' exact>
                <Login/>
            </Route>
            <Route path='/catalog'>
                <Catalog/>
            </Route>
        </Switch>
    </BrowserRouter>
);
export default Routes;