import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDetails'
})
export class UserDetailsPipe implements PipeTransform {

  transform(detail: any): any {
    if(detail){
        return detail.firstName + ' '+detail.lastName;
    }
    return null;
  }

}
