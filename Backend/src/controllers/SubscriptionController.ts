export class SubscriptionController {
    public async checkOut(): Promise<void> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }

    public async unsubscribe(): Promise<void> {
        await fetch('google.com');
        throw new Error('Method not implemented.');
    }
}
