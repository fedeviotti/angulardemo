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

  async ngOnInit() {

    // ogni volta che cambia il parametro mi sottoscrivo
    // ad una azione che fa dentro questa callback anonima
    this._route.params.subscribe(async (param) => {

      this.idUser = param['id'];
      this.user = await this._userService.GetByID(this.idUser) || new UserDto;
    });
  }

}
