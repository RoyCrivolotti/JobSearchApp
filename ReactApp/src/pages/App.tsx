import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import './css/App.css';

import ServiceSummary from '../components/ServiceSummary';

import { ServicesList } from '../model/serviceTypes';

function App() {
    const [services, setServices] = useState<ServicesList>([]);

    useEffect(() => {
        if (!process.env.API_URL) {
            console.log('The API URL has not been defined');

            return;
        }

        fetch(`${process.env.API_URL}/services/all/get`)
            .then(async res => res.json())
            .then(_services => _services as ServicesList)
            .then(setServices)
            .catch(error => console.error(error));
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Find My Profession</p>

                <div className="row">
                    {services.map(service => {
                        <ServiceSummary key={service.id} service={service} />;
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
