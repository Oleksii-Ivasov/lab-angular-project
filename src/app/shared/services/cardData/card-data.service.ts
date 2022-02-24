import { Injectable } from '@angular/core';
import { Card } from '../../interfaces/Card';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  // @Input() userData!: userData;
  userCards: Card[] = [];
  
  constructor() {}

  cards: Card[] = [];

  addCard(card: Card) {
    this.cards.push(card);
    this.id++;
  }

  removeCard(card: Card) {
    this.cards = this.cards.filter((el) => el !== card);
  }

  getCards() {
    return this.cards;
  }

  id: number = 1;
  setId(id: number) {
    return (this.id = id);
  }

  getId() {
    return this.id;
  }

  setUserCards(userCard: Card) {
    this.userCards.push(userCard);
  }

  getUserCards() {
    return this.userCards;
  }
}
