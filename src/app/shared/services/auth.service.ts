import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData, Auth } from '../models';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }


  public login (data: loginData) : Promise<Auth>{

    return new Promise<Auth>( (resolve, reject) => {

      let header = new HttpHeaders();
      header.append("Content-Type", "application/x-www-form-urlencoded");
      let dataForm = new URLSearchParams();

      dataForm.append("grant_type", "password");
      dataForm.append("userName",data.username);
      dataForm.append("password",data.password);

      let body = dataForm.toString();

      //chiamata
      this._http.post<Auth>(environment.API_URL + `Token`, body, {headers: header})
      .subscribe( (resp) => {

        //setto il token nel localStorage (cache)
        localStorage.setItem("AuthData", JSON.stringify(resp));

        resolve(resp);
      }, err => {
        //console.log(err.error.error_description);
        reject(err);
      });
    });

  }


  public logout(){
    localStorage.removeItem("AuthData");
  }

}
