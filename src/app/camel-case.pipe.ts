import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.split(' ');

    let result = '';
    value.forEach(v => {
      result += this.capitulize(v) + ' ';
    });

    return result;
  }

  capitulize(str: string) {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
  }

}
