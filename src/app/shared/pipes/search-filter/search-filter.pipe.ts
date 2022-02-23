import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searchFilter: string,) {
    if (!value) {
      return null;
    }

    if (!searchFilter) {
      return value;
    }

    let cards = [];
    for (let card of value) {
      if (card.title.toLowerCase().includes(searchFilter.toLowerCase())) {
        cards.push(card);
      }
    }
    return cards;
  }
}
