import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Card } from 'src/app/shared/interfaces/Card';
import { CardDataService } from 'src/app/shared/services/cardData/card-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private cardDataService: CardDataService) {}
  ngOnInit(): void {
    if (this.cardDataService.getCards().length === 0) {
      this.createGameCards();
    }
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

  filterValue: string = '';
  rangeFilter: string = '';
  indieInputFilter: string = '';
  adventureInputFilter: string = '';
  actionInputFilter: string = '';

  removeCardFromGames(card: Card) {
    this.cardDataService.removeCard(card);
    this.cards = this.cardDataService.getCards();
  }

  cards: Card[] = this.cardDataService.getCards();
  createGameCards() {
    const tags = ['indie', 'action', 'adventure'];
    for (let i = 0; i < 9; i++) {
      let card = {
        id: this.cardDataService.getId(),
        title: `Game ${this.cardDataService.getId()}`,
        price: Math.floor(Math.random() * 2000) + ' UAH',
        description: `Hell’s armies have invaded Earth. Become the Slayer in an epic
      single-player campaign to conquer demons across dimensions and stop the
      final destruction of humanity. The only thing they fear... is you.`,
        tag: tags[Math.floor(Math.random() * 3)],
      };
      this.cardDataService.addCard(card);
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
