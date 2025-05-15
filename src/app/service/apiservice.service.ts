import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient, private router: Router) {}

  private apiUrl = 'http://localhost:8090';

  private authUrl = '/api/auth';
  private employUrl = '/employ';

  private loginUrl = this.apiUrl + this.authUrl + '/login';
  private roleUrl = this.apiUrl + this.authUrl + '/roles';
  private registerUrl = this.apiUrl + this.authUrl + '/register';

  private addEmployUrl = this.apiUrl + this.employUrl + '/saveEmploy';

  public loginStatus = new Subject<boolean>();

  // to store token;
  public setUserToken(token: string) {
    this.loginStatus.next(true);
    console.log(' in sesseion ', token);

    sessionStorage.setItem('token', token);
  }

  public getUserToken() {
    console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token');
  }

  public isUserLoggedIn() {
    var token = this.getUserToken();
    if (token == undefined || token == null) {
      return false;
    }

    return true;
  }

  public setUser(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  public getUserDetails() {
    let userStr = sessionStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logoutUser();
      return null;
    }
  }

  public login(body: any): Observable<object> {
    return this.http.post(this.loginUrl, body);
  }

  public roleData(): Observable<object> {
    return this.http.get(this.roleUrl);
  }

  public register(body: any): Observable<object> {
    return this.http.post(this.registerUrl, body);
  }

  public addEmploy(formData: any): Observable<object> {
    return this.http.post(this.addEmployUrl, formData);
  }
}
