import { Injectable,Injector } from '@angular/core';
import { DataService } from './data.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req,next)
  {
    let authoriser = this.injector.get(DataService)
    let tokenizedreq = req.clone({
       setHeaders:{
        Authorization: `Bearer ${authoriser.gettoken()}`
       } 
    })
    return next.handle(tokenizedreq)
  }

}
