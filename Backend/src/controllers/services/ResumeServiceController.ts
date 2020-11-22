import { ServiceData } from '../../../../Models/serviceTypes';
import { IServiceControllerInterface } from './IServiceControllerInterface';

export class ResumeServiceController implements IServiceControllerInterface {
    public getServiceData(): ServiceData {
        throw new Error('Method not implemented.');
    }
}
