import { ServiceData } from '../../model/serviceTypes';

export interface IServiceControllerInterface {
    getServiceData(): ServiceData;
}
