import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from '../shared/services/auth.service';
import { loginData } from '../shared/models/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: loginData = new loginData();

  constructor(private _route: Router,
              private toasterService: ToasterService,
            private _authService: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    if (!this.loginData.username || !this.loginData.password) {
      this.toasterService.pop('warning', 'Attenzione', 'Username e password vuoti');
      return;
    }

    this._authService.login(this.loginData).then( () => {
      this._route.navigate(['/fullayout/users']);
    }).catch( (err) => {
      this.toasterService.pop('error', 'Errore', err.message || err.status);
    });

  }

}
