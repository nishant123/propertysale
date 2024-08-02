import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'signup',
        loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule)
      },
];
