import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.signinForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[a-z A-Z 0-9]{0,6}/)]]
    });
  }
   onLogin() {
     const email = this.signinForm.get('email').value;
     const password =  this.signinForm.get('password').value;
     this.authService.onSignIn(email, password).then(
       () => {
        this.route.navigate(['/coffees']);
       },
       (error) => this.errorMessage = error
       );
   }
}
