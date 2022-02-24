import { Injectable } from '@angular/core';
import { Friends } from '../../friends-mock/friends-mock';
import { Friend } from '../../interfaces/Friend';

@Injectable({
  providedIn: 'root',
})
export class FriendsDataService {
  mockFriends = Friends;

  friends: Friend[] = [];

  addMockFriend(friend: Friend) {
  this.mockFriends.push(friend);
  }

  addFriend(friend: Friend) {
   this.friends.push(friend);
  }

  removeMockFriend(friend: Friend) {
    this.mockFriends = this.mockFriends.filter((el) => el !== friend);
  }

  removeFriend(friend: Friend) {
    this.friends = this.friends.filter((el) => el !== friend);
  }

  getMockFriends() {
    return this.mockFriends;
  }

  getFriends() {
    return this.friends;
  }

  constructor() {}
}
