/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import TierDetails from '../components/TierDetails';

import { ServiceData, ServiceTier, ServiceTierList } from '../model/serviceTypes';

const ServiceDetails = (props: { serviceName: string }) => {
    const { serviceName } = props;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [tierList, setTierList] = useState<ServiceTierList>([]);
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
            .then(serviceData => serviceData as ServiceData)
            .then(data => {
                setTierList(data.tiers);

                // Updating the amount of services to re-render after fetch returns
                if (tierAmount !== data.tiers.length) {
                    setTierAmount(data.tiers.length);
                }
            })
            .catch(error => console.error(error));
    }, []);

    console.log('tiers: ', tierList);

    // Generating array of JSX elements for each tier fetched
    const tiersHtml = tierList.map(tier => <TierDetails key={tier.name} tier={tier} />);

    return (
        <div className="col m4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Pricing</span>
                    <p>
                        Description to be fetched HERE!
                    </p>
                </div>
                {tiersHtml}
            </div>
        </div>
    );
};

export default ServiceDetails;
