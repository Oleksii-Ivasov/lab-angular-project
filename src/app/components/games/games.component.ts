import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Card } from 'src/app/shared/interfaces/Card';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.createGameCards();
  }
  @ViewChild('indieInput') indieInput!: ElementRef;
  @ViewChild('actionInput') actionInput!: ElementRef;
  @ViewChild('adventureInput') adventureInput!: ElementRef;
  @HostListener('window:scroll') onScroll() {
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom < document.documentElement.clientHeight) {
      this.createGameCards();
    }
  }

  filterValue!: string;
  rangeFilter!: string;
  indieInputFilter: string = '';
  adventureInputFilter: string = '';
  actionInputFilter: string = '';

  cards: Card[] = [];

  createGameCards() {
    const tags = ['indie', 'action', 'adventure'];
    for (let i = 0; i < 9; i++) {
      let card = {
        title: `Game ${i + 1}`,
        price: Math.floor(Math.random() * 2000) + ' UAH',
        description: `Hell’s armies have invaded Earth. Become the Slayer in an epic
      single-player campaign to conquer demons across dimensions and stop the
      final destruction of humanity. The only thing they fear... is you.`,
        tag: tags[Math.floor(Math.random() * 3)],
      };
      this.cards.push(card);
    }
  }

  onFilterChange(value: string) {
    this.filterValue = value;
  }

  onInputChange(value: string) {
    switch (value) {
      case 'indie':
        if (this.indieInput.nativeElement.checked === true) {
          this.indieInputFilter = value;
        } else {
          this.indieInputFilter = '';
        }
        break;
      case 'action':
        if (this.actionInput.nativeElement.checked === true) {
          this.actionInputFilter = value;
        } else {
          this.actionInputFilter = '';
        }
        break;
      case 'adventure':
        if (this.adventureInput.nativeElement.checked === true) {
          this.adventureInputFilter = value;
        } else {
          this.adventureInputFilter = '';
        }
        break;
      default:
        throw new Error('Issue with checkbox inputs');
    }
  }

  onRangeChange(value: string) {
    this.rangeFilter = value;
  }
}
