import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDto } from '../shared/models/index';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: UserDto = new UserDto();
  private idUser: number;
  private  users: Array<UserDto> = [];

  constructor(private _route: ActivatedRoute,
              private _userService: UserService)
  {

  }

  ngOnInit() {
    // mi sottoscrivo al cambiamento del parametro sull'url,
    // quando accade passo dentro la funzione anonima del subscribe
    this._route.params.subscribe((param) => {
      this.idUser = param['id'];
      this._userService.GetByID(this.idUser)
      .then( (resp) => {
        this.user = resp || new UserDto;
      })
      .catch( (error) => {
        console.log(error);
      })
    });
  }

}
