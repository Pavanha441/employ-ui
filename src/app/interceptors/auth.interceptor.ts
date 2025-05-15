import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../service/apiservice.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService:ApiserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.apiService.getUserToken();
    console.log(" token " , token);
    
    if(token){
      console.log(" in");
      
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(" authReq " , authReq);
      
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
