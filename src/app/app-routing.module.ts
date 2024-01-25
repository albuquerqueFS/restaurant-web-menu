import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/restaurants/restaurants.module').then(
            (m) => m.RestaurantsModule,
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./features/menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: ':id/:group_id/:item_id',
        loadChildren: () =>
          import('./features/item/item.module').then((m) => m.ItemModule),
      },
      {
        path: ':id/cart',
        loadChildren: () =>
          import('./features/cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
