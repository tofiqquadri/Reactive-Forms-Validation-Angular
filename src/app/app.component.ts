import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveFormsAngular';
  data: RegistrationForm;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.data = new RegistrationForm();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, , Validators.email, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required,  Validators.minLength(10), Validators.maxLength(10) ]],
      message: ['', [Validators.required]]
    });
  }

 public sendMessage() {
   // stop here if form is invalid
   if (this.registerForm.invalid) {
     return;
   }

 }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
}

export class RegistrationForm {
   name: any;
   email: any;
   phoneNumber: any;
   message: any;
}
