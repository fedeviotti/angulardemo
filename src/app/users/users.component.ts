import { Component, OnInit } from '@angular/core';
import { UserDto } from '../shared/models/index';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  title: string = "pippo";
  author: string;
  filter: string = "";
  pageSize: number = 20;
  p: number = 1;
  total: number;


  users: Array<UserDto> = new Array<UserDto>();

  private userCloned: Array<UserDto> = new Array<UserDto>();

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

    //ES7 (stile C#) sintassi più recente
      try {
          this.author = 'Federico';
          this.dataSet(0, this.pageSize);
      } catch (error) {
          console.log(error);
      }
    }

  /**
   * Function to filter Grid Users
   * @memberOf AppComponent
   */
  async filtra(event :string){
      //console.log(this.filter);
      this.filter = event;

      if (event && event.length >= 1 && event.length < 3) return;

      //check on input string .. if empty redo initial dataset get
      if (!event)  {
        this.dataSet(0, this.pageSize);
        return;
      }

      //search for given string
      this.users = await this._userService.GetByUsername(event, 0, this.pageSize) || new Array<UserDto>();
      this.total = this.users.length > 0 ? this.users[0].count : 0;
  }

  /**
   * Change page event function
   *
   * @param {number} ev
   * @memberof UsersComponent
   */
  async pageChanged(ev :number){

    try {

      //setto quanti record devo skippare
      let skip = this.pageSize * (ev -1);

      if (!this.filter) await this.dataSet(skip, this.pageSize)
          /* this.dataSet(skip, this.pageSize).then( () => {
          //setto la pagina corrente solo quando ho la risposta della chiamata
          this.p = ev;
        }).catch( err => {
          console.log(err);
        });*/
      else {
        //search for given string
        this.users = await this._userService.GetByUsername(this.filter, skip, this.pageSize) || new Array<UserDto>();
        this.total = this.users.length > 0 ? this.users[0].count : 0;
      }

      this.p = ev;

    } catch (error) {
      throw error;
    }

  }

  /**
   * Get Dataset (with pagination) and return Users Array
   *
   * @private
   * @param {number} [skip=0]
   * @param {number} [take=20]
   * @returns {Promise<Array<UserDto>>}
   * @memberof UsersComponent
   */
  private async dataSet(skip: number=0, take: number=20) : Promise<Array<UserDto>>{

    return new Promise<Array<UserDto>>( async (resolve, reject) => {

      try {
        //recupero gli users da vedere
        this.users = await this._userService.Get(skip, this.pageSize) || new Array<UserDto>();
        this.total = this.users.length > 0 ? this.users[0].count : 0;
        this.userCloned = [... this.users];
        resolve(this.users);

      } catch (error) {
        reject(error);
      }
    });
  }

  editable(row: UserDto){
    this.users.forEach( xx => (xx.edit=false) );
    row.edit = true;
  }

}
