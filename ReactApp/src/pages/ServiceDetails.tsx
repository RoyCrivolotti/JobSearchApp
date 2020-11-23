/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
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
        <div className="container portfolio">
            <div className="header">
                <h1 className="center-align">Pricing</h1>
                <h3 className="center-align">
                    Description to be fetched HERE!
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
