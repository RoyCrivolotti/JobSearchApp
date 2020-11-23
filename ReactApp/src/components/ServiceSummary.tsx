import React from 'react';

import { ServiceData } from '../model/serviceTypes';

const SignInLink = (props: { service: ServiceData }) => {
    const { service } = props;

    return (
        <div className="col m4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{service.name}</span>
                    <p>
                        I am a very simple card. I am good at containing small bits
                        of information. I am convenient because I require little
                        markup to use effectively.
                    </p>
                </div>
                <div className="card-action">
                    <a href="/">This is a link</a>
                    <a href="/">This is a link</a>
                </div>
            </div>
        </div>
    );
};

export default SignInLink;
