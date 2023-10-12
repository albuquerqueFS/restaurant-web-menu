import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item-routing.module';
import { CartFooterComponent } from 'src/app/components/ui/cart-footer/cart-footer.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule, ItemRoutingModule, CartFooterComponent],
})
export class ItemModule {}
