import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(cards: any, searchFilter: string) {
    if (!cards) {
      return null;
    }

    if (!searchFilter) {
      return cards;
    }

    let cardsArr = [];
    for (let card of cards) {
      if (card.title.toLowerCase().includes(searchFilter.toLowerCase())) {
        cardsArr.push(card);
      }
    }
    return cardsArr;
  }
}
