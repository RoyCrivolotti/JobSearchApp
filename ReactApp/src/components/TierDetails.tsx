/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

import { ServiceData, ServiceTier } from '../model/serviceTypes';

const TierDetails = (props: { tier: ServiceTier }) => {
    const { tier } = props;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [tierData, setTierData] = useState<ServiceTier>({ name: '', description: '', price: 0 });

    useEffect(() => {
        setTierData(tier);
    }, [tier]);

    return (
        <div className="col m4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{tierData.name}</span>
                    <p>
                        {tierData.description}
                    </p>
                </div>
                <div className="card-action">
                    <p>
                        Price:
                        {' '}
                        {tierData.price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TierDetails;
