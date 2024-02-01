import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item-routing.module';
import { CartFooterComponent } from 'src/app/shared/components/cart-footer/cart-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    CartFooterComponent,
    ReactiveFormsModule,
  ],
})
export class ItemModule {}
