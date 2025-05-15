import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


  private roles : Role[]=[];

  constructor(private apiService:ApiserviceService) { }


  loadRoles(){
    this.apiService.roleData().subscribe(
      (response:any)=>{
        this.roles = response;
      }
    )
  }
  
  getRoles(): Role[]{
    console.log(" in sss" , this.roles);
    
    return this.roles;
  }

}
