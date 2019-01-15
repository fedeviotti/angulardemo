import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { Router, ActivatedRoute } from '@angular/router';
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
  private  users: Array<UserDto> = new Array<UserDto>();

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private toasterService: ToasterService)
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


  update(){

    this._userService.update(this.user).then( () => {
      this.toasterService.pop('success', 'Riuscito', 'User aggiornato con successo!');
      this._router.navigate(['/fullayout/users']);
    }).catch( (err) => {
      this.toasterService.pop('error', 'Errore', err.message || err.status  );
    });
  }

}
