import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css'],
})
export class AddEmployComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private apiService: ApiserviceService
  ) {
    this.employForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      salary: ['', Validators.required],
      designation: ['', Validators.required],
      username: ['', Validators.required],
      roles: [[]],
    });
  }

  selectedPhoto!: File;
  selectedResume!: File;
  employForm: FormGroup;
  roles: Role[] = [];

  ngOnInit(): void {
    this.getRoles();
  }

  onFileChange(event: any, type: 'photo' | 'resume') {
    const file = event.target.files[0];

    if (type === 'photo') {
      this.selectedPhoto = file;
    } else {
      this.selectedResume = file;
    }
  }

  getRoles() {
    this.roles = this.roleService.getRoles();
    console.log(' rrr ', this.roles);
  }

  addEmploy() {
    console.log(' ', this.employForm.value);

    if (this.employForm.invalid) return;

    const formData = new FormData();

    formData.append('employee', JSON.stringify(this.employForm.value));
    formData.append('photo', this.selectedPhoto);
    formData.append('resume', this.selectedResume);

    this.apiService.addEmploy(formData).subscribe((response: any) => {
      console.log(' Add');
    });
  }
}
