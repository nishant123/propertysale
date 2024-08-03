import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TranslateModule } from '@ngx-translate/core';
//import { SignupConfirmationComponent } from '../signup-confirmation/signup-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ForgetpasswordComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class ForgetpasswordModule { }
