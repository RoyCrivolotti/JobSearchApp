export type ServiceTier = {
    tier: string,
    price: float
}

export type ServiceData = {
    serviceName: string,
    serviceTiers: ServiceTier[],
}
