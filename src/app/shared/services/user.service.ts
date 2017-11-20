import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private users: Array<UserDto> = [
    new UserDto({id:1, name:'Federico', surname:'Scamuzzi', email:'federico.scamuzzi@gmail.com'}),
    new UserDto({id:2, name:'Marco', surname:'Rossi', email:'marco.rossi@gmail.com'}),
    new UserDto({id:3, name:'Federica', surname:'Verdi', email:'federica.verdi@gmail.com'}),
    new UserDto({id:4, name:'Massimo', surname:'Bianchi', email:'massimo.bianchi@gmail.com'})
];

  constructor(private _http: HttpClient) { }

  /**
   * Get users
   *
   * @returns {Array<UserDto>}
   * @memberof UserService
   */
  public async Get(skip: number=0, take: number=20) : Promise<Array<UserDto>>{
    return this._http.get<Array<UserDto>>(environment.API_URL + `User/find?skip=${skip}&take=${take}`).toPromise();
  }

  public async GetByID(id: number) : Promise<UserDto>{
    return this._http.get<UserDto>(environment.API_URL + `User/findById/${id}`).toPromise();
  }

  public async GetByUsername(name: string="", skip: number=0, take: number=20) : Promise<Array<UserDto>>{
    return this._http.get<Array<UserDto>>(environment.API_URL + `User/findByUsername/${name}?skip=${skip}&take=${take}`).toPromise();
  }

  /**
   * Add new user
   *
   * @param {UserDto} user
   * @returns {Array<UserDto>}
   * @memberof UserService
   */
  public Add(user: UserDto) : Array<UserDto>{
    this.users.push(user);
    return this.users;
  }

}
