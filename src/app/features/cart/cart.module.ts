import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, NgIconsModule],
})
export class CartModule {}
