import { ServicesList } from './serviceTypes';

export type User = {
    firstName: string;
    lastName: string;
    location: Location;
    email: string;
};

export type UserSubscriptions = {
    paymentInformation: PaymentDetails;
    services: ServicesList;
};

export type Location = {
    address: string;
    country: string;
    zip: number;
};
