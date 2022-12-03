import { ApiConfig } from './api-config.interface';
import { Callback } from './callback.interface';

export interface GetRespApi {
    config: ApiConfig;    
    callback: Callback;
}