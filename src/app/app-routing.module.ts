import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/restaurants/restaurants.module').then(
            (m) => m.RestaurantsModule,
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: ':id/:group_id/:item_id',
        loadChildren: () =>
          import('./pages/item/item.module').then((m) => m.ItemModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
