export type ServiceTier = {
    tier: string;
    price: number;
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
