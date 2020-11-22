import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import 'materialize-css/dist/css/materialize.min.css';

// Layouts
import NotFound from '../pages/NotFound';
// import SignUp from '../pages/SignUp';
import Navbar from './Navbar';

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
