import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { EmployListComponent } from './pages/employ-list/employ-list.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
{
  path:'login',
  component:LoginComponent,
  // pathMatch:'full'
  
},{
  path:'register',
  component:RegisterComponent
},{
  path:'',
  component:MainLayoutComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'employeeList',
      component:EmployListComponent
    },{
      path:'add-employ',
      component:AddEmployComponent
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
