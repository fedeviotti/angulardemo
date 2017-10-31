import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform<T>(value: Array<T>,field:string, args?: string): Array<T> {
    return !args ? value : value.filter(xx => xx[field].toLowerCase().indexOf(args.toLowerCase())> -1) as Array<T>;
  }

}
