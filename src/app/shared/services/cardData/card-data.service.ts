import { Injectable } from '@angular/core';
import { Card } from '../../interfaces/Card';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  // @Input() userData!: userData;
  data: Card[] = [];
  // private data = new BehaviorSubject('');
  // currentData = this.data.asObservable();

  constructor() {}

  setData(data: Card) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
