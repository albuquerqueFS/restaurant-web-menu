import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';
import { MenuService } from 'src/app/core/services/menu.service';
import { RestaurantService } from './services/restaurant.service';
import { URL } from 'src/@types/basics';

const getAllRestaurants = (service: MenuService) => service.getRestaurants();

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {
  restaurants$ = getAllRestaurants(inject(MenuService));
  restaurantTypes = ['Fast Food', 'Comida Caseira', 'Hamburgueria'];

  newRestaurantForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    type: new FormControl<string>(this.restaurantTypes[0]),
    image_cover: new FormControl<URL>(''),
  });

  restaurantDialog = true;

  constructor(private restaurantService: RestaurantService) {}

  openNewRestarauntForm() {
    this.restaurantDialog = true;
  }

  onUpload(event: UploadEvent) {}

  submitNewRestaurant() {
    this.restaurantService
      .createRestaurant({
        name: this.newRestaurantForm.value.name as string,
        type: this.newRestaurantForm.value.type as string,
        image_cover: this.newRestaurantForm.value.image_cover as string,
      })
      .subscribe(console.log);
  }
}
