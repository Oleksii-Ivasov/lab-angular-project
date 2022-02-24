import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../../interfaces/Friend';

@Pipe({
  name: 'friendsSearchFilter',
})
export class FriendsSearchFilterPipe implements PipeTransform {
  transform(friends: Friend[], searchFilter: string) {
    if (!friends) {
      return null;
    }

    if (!searchFilter) {
      return friends;
    }

    let friendsArr = [];
    for (let friend of friends) {
      if (friend.email.toLowerCase().includes(searchFilter.toLowerCase())) {
        friendsArr.push(friend);
      }
    }
    return friendsArr;
  }
}
