import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployListComponent } from './pages/employ-list/employ-list.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';
import { RoleService } from './service/role.service';

export function loadRoles(roleService: RoleService) {
  return () => roleService.loadRoles();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    MainLayoutComponent,
    DashboardComponent,
    EmployListComponent,
    AddEmployComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadRoles,
      deps: [RoleService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
