import React from 'react';
import { Route } from 'react-router-dom';
import logo from '../logo.svg';
import './css/App.css';

import ServiceSummary from '../components/ServiceSummary';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Find My Profession</p>

                <div className="row">
                    <ServiceSummary />
                    <ServiceSummary />
                    <ServiceSummary />
                </div>
            </header>
        </div>
    );
}

export default App;
