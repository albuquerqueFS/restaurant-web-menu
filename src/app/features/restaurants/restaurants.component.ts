import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadEvent } from 'primeng/fileupload';
import { MenuService } from 'src/app/core/services/menu.service';

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
    name: new FormControl('', [Validators.required]),
    type: new FormControl(''),
    image_cover: new FormControl(null),
  });

  restaurantDialog = true;

  openNewRestarauntForm() {
    this.restaurantDialog = true;
  }

  onUpload(event: UploadEvent) {}

  submitNewRestaurant() {}
}
