import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../interfaces/Card';

@Pipe({
  name: 'checkboxFilter',
})
export class CheckboxFilterPipe implements PipeTransform {
  transform(
    cardsArray: Card[],
    filter1: string,
    filter2: string,
    filter3: string
  ) {
    if (!cardsArray) {
      return null;
    }

    if (!filter1 && !filter2 && !filter3) {
      return cardsArray;
    }

    let cards = [];
    for (let card of cardsArray) {
      if (
        card.tag.toLowerCase().includes(filter1.toLowerCase()) &&
        card.tag.toLowerCase().includes(filter2.toLowerCase()) &&
        card.tag.toLowerCase().includes(filter3.toLowerCase())
      ) {
        cards.push(card);
      }
    }
    return cards;
  }
}
