import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private users: Array<UserDto> = [];

  constructor(private _http: HttpClient) { }

  /**
   * Get users
   *
   * @returns {Array<UserDto>}
   * @memberof UserService
   */
  public async Get() : Promise<Array<UserDto>>{
    return this._http.get<Array<UserDto>>(environment.API_URL + 'User/find').toPromise();
  }

  /**
   * GetByID
   * recupera utente tramite ID
   *
   * @param {number} id
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async GetByID(id: number) : Promise<UserDto>{
    return this._http.get<UserDto>(environment.API_URL + `User/findById/${id}`).toPromise();
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
