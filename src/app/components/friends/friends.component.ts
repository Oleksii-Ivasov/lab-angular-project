import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/interfaces/Friend';
import { FriendsDataService } from 'src/app/shared/services/friendsData/friends-data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  mockFriends: Friend[] = this.friendsDataService.getMockFriends();
  friends: Friend[] = this.friendsDataService.getFriends();
  searchValue: string = '';
  isFriendSearch = false;

  constructor(private friendsDataService: FriendsDataService) {}

  ngOnInit(): void {}

  onSearchChange(value: string) {
    this.isFriendSearch = true;
    this.searchValue = value;
  }

  addFriend(friend: Friend) {
    if (this.friends.includes(friend)) {
      this.friendsDataService.removeFriend(friend);
      this.friendsDataService.addMockFriend(friend);
      this.friends = this.friendsDataService.getFriends();
      this.mockFriends = this.friendsDataService.getMockFriends();
    } else {
      this.friendsDataService.removeMockFriend(friend);
      this.friendsDataService.addFriend(friend);
      this.mockFriends = this.friendsDataService.getMockFriends();
      this.friends = this.friendsDataService.getFriends();
    }
  }
}
