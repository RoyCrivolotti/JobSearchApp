/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ServiceTier } from '../model/serviceTypes';

const TierDetails = (props: { tier: ServiceTier; serviceName: string }) => {
    const { tier, serviceName } = props;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [tierData, setTierData] = useState<ServiceTier>({ name: '', description: '', price: 0 });

    useEffect(() => {
        setTierData(tier);
    }, [tier]);

    return (
        <div className="col m4">
            <div className="card white darken-1">
                <div className="card-content black-text">
                    <h4 className="card-title center">{tierData.name}</h4>
                    <h4 className="center bold black-text">
                        Price:
                        {' $'}
                        {tierData.price}
                    </h4>
                    <p>
                        {tierData.description}
                    </p>
                </div>
                <div className="card-action black-text">
                    <Link to={{ pathname: `/services/checkout/${serviceName}`, state: tier }}>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Get started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TierDetails;
