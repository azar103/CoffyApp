import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService, private formBuilder: FormBuilder,private route: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[a-z A-Z 0-9]{6,}/)]]
    });
  }
   onSave() {
     const email = this.signupForm.get('email').value;
     const password =  this.signupForm.get('password').value;
     this.authService.onSignUp(email, password).then(
       () =>  {this.route.navigate(['/auth']);
      },
      (error) => this.errorMessage = error
     );
   }
}
