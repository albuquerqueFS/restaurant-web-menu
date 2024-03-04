import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { ConfirmationService } from 'primeng/api';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, NgIconsModule, OrdersComponent],
  providers: [ConfirmationService],
})
export class CartModule {}
