import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { GroupsComponent } from 'src/app/features/menu/components/groups/groups.component';
import { FormsModule } from '@angular/forms';
import { CartFooterComponent } from 'src/app/shared/components/cart-footer/cart-footer.component';

@NgModule({
  declarations: [MenuComponent, GroupsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    CartFooterComponent,
  ],
})
export class MenuModule {}
