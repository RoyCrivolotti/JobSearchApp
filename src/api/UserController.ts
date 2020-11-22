import { User, UserSubscriptions } from '../model/user';

export class SubscriptionServiceController {
    public async getUserDetails(userId: number): Promise<User> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }

    public async getUserSubscriptions(userId: number): Promise<UserSubscriptions> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }
}
