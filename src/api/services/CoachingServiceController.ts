import { ServiceData } from '../../model/serviceTypes';
import { IServiceControllerInterface } from './IServiceControllerInterface';

export class CoachingServiceController implements IServiceControllerInterface {
    public getServiceData(): ServiceData {
        throw new Error('Method not implemented.');
    }
}
