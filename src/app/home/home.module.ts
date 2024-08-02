import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
//import { ForgotConfirmationComponent } from '../forgot-confirmation/forgot-confirmation.component';
//import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  //  TranslateModule,
   // ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
