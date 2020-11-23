import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './css/App.css';

import ServiceSummary from '../components/ServiceSummary';

import { ServicesList } from '../model/serviceTypes';

function App() {
    const [services, setServices] = useState<ServicesList>([]);
    const [servicesAmount, setServicesAmount] = useState(0);

    useEffect(() => {
        if (!process.env.REACT_APP_API_URL) {
            console.log('The API URL has not been defined');

            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/services/all/get`, {
            method: 'GET',
            mode: 'cors',
        })
            .then(async res => res.json())
            .then(_services => _services as ServicesList)
            .then(data => {
                setServices(data);

                // Updating the amount of services to re-render after fetch returns
                if (servicesAmount !== data.length) {
                    setServicesAmount(data.length);
                }
            })
            .catch(error => console.error(error));
    }, [servicesAmount]);

    // Generating array of JSX elements for each service fetched
    const servicesHtml = services.map(service => <ServiceSummary key={service.id} service={service} />);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Find My Profession</p>
                <div className="row">
                    {servicesHtml}
                </div>
            </header>
        </div>
    );
}

export default App;
