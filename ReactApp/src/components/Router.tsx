import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import 'materialize-css/dist/css/materialize.min.css';

// Components
import Navbar from './Navbar';

// Layouts
import NotFound from '../pages/NotFound';

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
