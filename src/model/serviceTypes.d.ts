export type ServiceTier = {
    tier: string;
    price: float;
    description: string;
};

export type ServiceData = {
    serviceName: string;
    serviceTiers: ServiceTier[];
    description: string;
    serviceUrl: string;
};

export type ServicesList = {
    services: ServiceData[];
};
