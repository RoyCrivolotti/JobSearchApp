import { User, UserSubscriptions } from '../../../Models/user';

export class UserController {
    public async getUserDetails(userId: number): Promise<User> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }

    public async getUserSubscriptions(userId: number): Promise<UserSubscriptions> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }
}
