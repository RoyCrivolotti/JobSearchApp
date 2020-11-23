import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import 'materialize-css/dist/css/materialize.min.css';

// Components
import Navbar from './Navbar';

// Layouts
import NotFound from '../pages/NotFound';
import ServiceTierDetails from '../pages/ServiceDetails';

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/services/resume" component={() => <ServiceTierDetails serviceName="resume" />} />
            <Route exact path="/services/coaching" component={() => <ServiceTierDetails serviceName="coaching" />} />
            <Route exact path="/services/profileUpdate" component={() => <ServiceTierDetails serviceName="profileUpdate" />} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
