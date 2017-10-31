import { EntityBase, IEntityBase } from "./entity-base"

export interface IUserDto extends IEntityBase {
    name:string;
    surname:string;
    email:string;
}

export class UserDto extends EntityBase implements IUserDto {
 public name:string="";
 public surname:string="";
 public email:string="";

    //un costrutture con vuoto o valorizzare 
    constructor(values : object={}){
        super();
        Object.assign(this, values);
    }
}
