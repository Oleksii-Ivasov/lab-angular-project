import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/Card';
import { CardDataService } from 'src/app/shared/services/cardData/card-data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  @Input() card: Card = {
    id: 1,
    title: 'Default game title',
    price: '200 UAH',
    description: 'lorem ipsum',
    tag: 'indie',
  };
  @ViewChild('addToLibraryBtn') addToLibraryBtn!: ElementRef;
  constructor(private cardDataService: CardDataService) {}
  cards: Card[] = this.cardDataService.getUserCards();
  disable: boolean = true;

  ngOnInit(): void {
    console.log(this.addToLibraryBtn);
  }
}
