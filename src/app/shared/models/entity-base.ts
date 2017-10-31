export interface IEntityBase {
    id: number;
    count: number;
    edit: boolean;
}


export class EntityBase implements IEntityBase {
    public id: number;
    public count: number=0;
    public edit: boolean= false;
}
