import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [    FormsModule,
    ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  public ForgetpasswordForm = new FormGroup({
    email: new FormControl(''),
    });
  public onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('forget password');
    console.log(this.ForgetpasswordForm.value);
  }
  constructor(
    private formBuilder: FormBuilder,

    // private authService: AuthServices,
    // private modalService: BsModalService,

  ) { }
}
