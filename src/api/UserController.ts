import { User, UserSubscriptions } from '../model/user';

export class SubscriptionServiceController {
    public async getUserDetails(userId: number): Promise<User> {
        throw new Error('Method not implemented.');
        await new Promise(resolve => resolve());
    }

    public async getUserSubscriptions(userId: number): Promise<UserSubscriptions> {
        throw new Error('Method not implemented.');
        await new Promise(resolve => resolve());
    }
}
