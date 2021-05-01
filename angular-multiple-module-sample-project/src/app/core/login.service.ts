import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getLoginDetails() : any{
      return {
        firstName:'Subhash',
        lastName:'Lamba',
        role:'ADMIN'
      }
  }
}
