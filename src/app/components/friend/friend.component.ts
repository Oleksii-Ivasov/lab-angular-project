import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Friend } from 'src/app/shared/interfaces/Friend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  @Input() friend: Friend = {
    id: 1,
    email: 'John Smith',
  };
  @Output() addFriend = new EventEmitter<Friend>();
  @Input() friendStatus: string = 'Add';

  constructor() {}

  ngOnInit(): void {}

  _addFriend(friend: Friend) {
    this.addFriend.emit(friend);
    console.log(friend);
  }
}
