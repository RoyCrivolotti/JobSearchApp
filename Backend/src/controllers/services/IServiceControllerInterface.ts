import { ServiceData } from '../../../../Models/serviceTypes';

export interface IServiceControllerInterface {
    getServiceData(): ServiceData;
}
