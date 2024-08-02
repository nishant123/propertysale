import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }, 

    {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
      },    
      {
        path: 'signup',
        loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule)
      },
];
