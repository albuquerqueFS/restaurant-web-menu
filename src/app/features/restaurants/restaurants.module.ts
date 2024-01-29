import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [CommonModule, RestaurantsRoutingModule, NgIconsModule],
})
export class RestaurantsModule {}
