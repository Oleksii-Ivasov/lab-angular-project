import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/Card';
import { CardDataService } from 'src/app/shared/services/cardData/card-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card = {
    title: 'Default game title',
    price: '200 UAH',
    description: 'lorem ipsum',
    tag: 'indie',
  };
  constructor(private cardDataService: CardDataService) {}

  ngOnInit(): void {}
  addToLibrary() {
    this.cardDataService.setData(this.card);
  }
}
