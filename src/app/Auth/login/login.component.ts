import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService,
    private _auth: AuthService) {
    document.body.id = 'LoginForm';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }
  login() {
    const { email, password } = this.loginForm.value;
    if (this._auth.login(email, password) == true) {
      this._router.navigateByUrl('/dashboard')
    } else {
      this._toastr.error('Invalid User Email or Password', 'Login Failed');
    }
  }
  get f() { return this.loginForm.controls; }  
}
