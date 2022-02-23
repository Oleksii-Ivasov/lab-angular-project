import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userData } from '../../interfaces/userData';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
 // @Input() userData!: userData;
  data: userData = {
    username: '',
    email: '',
    age: ''
  };
  // private data = new BehaviorSubject('');
  // currentData = this.data.asObservable();

  constructor() {}

  setData(data: userData) {
    this.data = data;
  }

  getData() {
    return this.data
  }
}
