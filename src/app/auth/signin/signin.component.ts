import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../validateForm';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  type: string = 'password';
  showPass: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {}

  onSignIn() {
    if (this.signinForm.valid) {
      
      //Send the object to database
      this.auth.SignIn(this.signinForm.value).subscribe({
        next: (res) => {
          this.toast.success({detail:"SUCCESS", summary:res.message, duration:3000});
          this.auth.storeToken(res.token);
          this.signinForm.reset();
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          console.log(err);
          this.toast.error({detail:"ERROR", summary:"Something went wrong!", duration:3000});

        },
      });
    } else {
      //Throw a error
      ValidateForm.validateForm(this.signinForm);
    }
  }

  showPassword() {
    this.showPass = !this.showPass;
    this.showPass ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.showPass ? (this.type = 'text') : (this.type = 'password');
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
