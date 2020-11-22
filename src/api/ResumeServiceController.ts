import { ServiceData } from '../model/types';
import { IServiceControllerInterface } from './IServiceControllerInterface';

export class ResumeServiceController implements IServiceControllerInterface {
    public getServiceData(): ServiceData {
        throw new Error('Method not implemented.');
    }

}
