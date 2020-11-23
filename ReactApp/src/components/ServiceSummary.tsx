/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

import { ServiceData } from '../model/serviceTypes';

const ServiceSummary = (props: { service: ServiceData }) => {
    const { service } = props;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [_service, setService] = useState<ServiceData>(service);

    useEffect(() => {
        setService(service);
    }, [service]);

    return (
        <div className="col m4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{_service.name}</span>
                    <p>
                        {service.description}
                    </p>
                </div>
                <div className="card-action">
                    <a href={`${process.env.PUBLIC_URL}/${service.url}`}>View details</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceSummary;
