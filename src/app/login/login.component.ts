import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';

  constructor(private _route: Router,
              private toasterService: ToasterService) {

  }

  ngOnInit() {
  }

  login() {
    if (!this.username || !this.password) {
      this.toasterService.pop('warning', 'Attenzione', 'Username e password vuoti');
      return;
    }

    this._route.navigate(['/fullayout/users']);
  }

}
