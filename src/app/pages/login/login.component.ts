import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg:string='';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiserviceService
  ) {
    this.loginForm = this.fb.group({
      userNameEmail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(' Form value ', this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.loginForm.value).subscribe(
      (respone: any) => {
        console.log('response', respone);
        this.apiService.setUserToken(respone.token);
        this.apiService.setUser(respone);

        this.router.navigate(['/employeeList']);
      },
      (error) => {
        this.errorMsg = error.error.error;
        console.log('error', this.errorMsg);

      }
    );
  }
}
