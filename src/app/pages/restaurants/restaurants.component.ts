import { Component, inject } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

const getAllRestaurants = (service: MenuService) => service.getRestaurants();

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {
  restaurants$ = getAllRestaurants(inject(MenuService));
}
