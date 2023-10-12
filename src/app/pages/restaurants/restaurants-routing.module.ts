import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RestaurantsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
