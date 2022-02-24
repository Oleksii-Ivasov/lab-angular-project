import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Card } from 'src/app/shared/interfaces/Card';
import { CardDataService } from 'src/app/shared/services/cardData/card-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card = {
    id: 1,
    title: 'Default game title',
    price: '200 UAH',
    description: 'lorem ipsum',
    tag: 'indie',
  };
  @Output() removeCardFromGames = new EventEmitter<Card>();
  @ViewChild('addToLibraryBtn') addToLibraryBtn!: ElementRef;
  @Input() disable!: boolean;
  constructor(private cardDataService: CardDataService) {}

  _removeCardFromGames(card: Card) {
    this.removeCardFromGames.emit(card);
  }

  ngOnInit(): void {}
  addToLibrary() {
    this.cardDataService.setUserCards(this.card);
  }
}
