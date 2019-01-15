import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../models/index';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request: HttpRequest<any>;

    if (localStorage && localStorage.getItem("AuthData")){
      var token = JSON.parse(localStorage.getItem("AuthData")) as Auth;

      //se token non presente torna nel flusso senza settare il token
      if (!token || !token.access_token) return next.handle(req);

      let authHeader = `Bearer ${token.access_token}`;
      //clone the request to add the new header
      request = req.clone({ setHeaders: { Authorization: authHeader }});

    } else {
      request = req.clone();
    }

    return next.handle(request);

  }

  constructor() { }

}
