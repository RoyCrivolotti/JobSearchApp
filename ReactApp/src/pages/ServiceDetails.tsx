import React, { useEffect, useState } from 'react';
import TierDetails from '../components/TierDetails';

import { ServiceData } from '../model/serviceTypes';

const ServiceDetails = (props: { serviceName: string }) => {
    const { serviceName } = props;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [serviceData, setServiceData] = useState<ServiceData>();
    const [tierAmount, setTierAmount] = useState(0);

    useEffect(() => {
        if (!process.env.REACT_APP_API_URL) {
            console.log('The API URL has not been defined');

            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetch(`${process.env.REACT_APP_API_URL}/services/${serviceName}`, {
            method: 'GET',
            mode: 'cors',
        })
            .then(async res => res.json())
            .then(_serviceData => _serviceData as ServiceData)
            .then(data => {
                setServiceData(data);

                // Updating the amount of services to re-render after fetch returns
                if (tierAmount !== data.tiers.length) {
                    setTierAmount(data.tiers.length);
                }
            })
            .catch(error => console.error(error));
    }, []);

    console.log('tiers: ', serviceData);

    // Generating array of JSX elements for each tier fetched
    const tiersHtml = serviceData?.tiers.map(tier => <TierDetails key={tier.name} tier={tier} serviceName={serviceName} />);

    return (
        <div className="container portfolio">
            <div className="header">
                <h1 className="center-align">{serviceData?.name}</h1>
                <h3 className="center-align">
                    {serviceData?.description}
                </h3>
            </div>
            <div className="container portfolio">
                <div className="col s12 m12 l12">
                    <div className="row">
                        {tiersHtml}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
