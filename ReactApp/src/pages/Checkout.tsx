import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckoutParameters } from '../model/parameters';

const Checkout = () => {
    const params = useParams<CheckoutParameters>();

    return (

        <>
            <h1>Checkout</h1>
            <h2>{params.serviceName}</h2>
        </>
    );
};
export default Checkout;
