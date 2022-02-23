import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {
  transform(value: any, rangeFilter: string,) {
    if (!value) {
      return null;
    }

    if (!rangeFilter) {
      return value;
    }

    let cards = [];
    for (let card of value) {
      if (+card.price.slice(0, -4) < +rangeFilter) {
        cards.push(card);
      }
    }
    return cards;
  }

}
