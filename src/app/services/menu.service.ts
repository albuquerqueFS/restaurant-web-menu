import { Injectable } from '@angular/core';
import { Observable, map, mergeMap, of } from 'rxjs';
import { database } from 'src/assets/mock/db.data';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  db = of(database);

  constructor() {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.db.pipe(map((value) => value.restaurants));
  }

  getRestaurantById(uuid: string): Observable<Restaurant> {
    return this.db.pipe(
      map((value) =>
        value.restaurants.filter((restaurant) => restaurant.key === uuid),
      ),
      mergeMap((value) => value),
    );
  }

  getItemById(
    restaurant_id: string,
    group_id: string,
    item_id: string,
  ): Observable<Item> {
    return this.db.pipe(
      map((database) =>
        database.restaurants.filter(
          (restaurant) => restaurant.key === restaurant_id,
        ),
      ),
      mergeMap((value) => value),
      map(
        (restaurant) =>
          restaurant.menu.groups.filter((group) => group.id === group_id)[0],
      ),
      map(
        (group: Group) => group.items.filter((item) => item.id === item_id)[0],
      ),
    );
  }
}
