import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shoten'
})
export class ShotenPipe implements PipeTransform {

  transform(value: any, limit?: any): any {
    if(value.length>limit){
      
      return value.substr(0,limit)+'----Load more';
    }
    return value;
  }

}
