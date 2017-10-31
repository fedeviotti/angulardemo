import { Component, OnInit } from '@angular/core';
import { UserDto } from '../shared/models/index';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  title: string = 'pippo';
  author: string;
  filter: string ="";

  users: Array<UserDto> = [];

  private userCloned: Array<UserDto> = [];

  constructor(private _userService: UserService)
  {

  }

  //Page load
  async ngOnInit() {
    /*
    this._userService.Get()
    .then((resp) =>{
      this.users = resp;
      this.author='Federico';
      this.userCloned = [... this.users]; //clona l'istanza o se separati da virgola li ingloba (spread operator)
    })
    .catch( (error) => {
      console.log(error);
    })
    */

      try {
        this.users = await this._userService.Get();
        this.author='Federico';
        this.userCloned = [... this.users];
      } catch (error) {
        console.log(error);
      }
    }

  /**
   * Function to filter Grid Users
   * @memberOf AppComponent
   */
  filtra(event:any){
      console.log(this.filter);
      if (!this.filter) this.users=this.userCloned;

      this.users= this.userCloned.filter(xx => xx.name.toLowerCase().indexOf(event.toLowerCase())> -1)
  }

}
