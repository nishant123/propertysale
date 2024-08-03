import { environment } from '../../environments/environment';

export const endpoints = {    
    auth: {
        registerUrl: environment.userURL + '',
        loginUrl: environment.userURL + '/login',
      
    },
   
};
