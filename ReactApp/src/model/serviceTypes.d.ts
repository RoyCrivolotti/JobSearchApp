export type ServiceTier = {
    name: string;
    price: number;
    description: string;
};

export type ServiceData = {
    name: string;
    tiers: ServiceTier[];
    description: string;
    url: string;
    id: string;
};

export type ServicesList = ServiceData[];
export type ServiceTierList = ServiceTier[];
