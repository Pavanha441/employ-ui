import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private apiService: ApiserviceService, private fb: FormBuilder,private roleService:RoleService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: [[]],
    });
  }

  roles: Role[] = [];

  registerForm: FormGroup;

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
   this.roles = this.roleService.getRoles();
  }

  registerUser() {
    console.log(' vale ', this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }


    this.apiService.register(this.registerForm.value).subscribe(
      (response:any)=>{
        console.log("ress" , response);
        
        alert("User created"+response);
      },(error:any)=>{
        console.log("ress" , error.error.error);
        alert(error.error.error);
      }
    )
  }
}
