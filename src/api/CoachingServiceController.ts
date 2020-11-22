import { ServiceData } from '../model/types';
import { IServiceControllerInterface } from './IServiceControllerInterface';

export class CoachingServiceController implements IServiceControllerInterface {
    getServiceData(): ServiceData {
        throw new Error('Method not implemented.');
    }

}
