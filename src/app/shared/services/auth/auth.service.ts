import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isValidForm = false;

  isValid() {
    if (this.isValidForm) {
      return true;
    } else {
      return false;
    }
  }
}
