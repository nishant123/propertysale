import { environment } from '../../environments/environment';

export const endpoints = {    
    auth: {
        registerUrl: environment.userURL + '/auth/create',
        loginUrl: environment.userURL + '/auth/login',
      
    },
   
};
