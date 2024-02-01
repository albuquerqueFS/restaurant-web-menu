import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from 'src/app/shared/components/ui/button/button.component';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NgIconsModule,
    CardModule,
    ButtonComponent,
  ],
})
export class RestaurantsModule {}
