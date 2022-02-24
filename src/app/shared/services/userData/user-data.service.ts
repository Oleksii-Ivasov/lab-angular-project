import { Injectable } from '@angular/core';
import { userData } from '../../interfaces/userData';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  data: userData = {
    username: '',
    email: '',
    age: '',
  };

  constructor() {}

  setData(data: userData) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
