import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgIconsModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
})
export class CartModule {}
