import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupsComponent } from 'src/app/features/menu/components/groups/groups.component';
import { MenuService } from 'src/app/core/services/menu.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { SYSTEM_LEVELS } from 'src/utils/constants';
import { Restaurant } from 'src/@types/type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild(GroupsComponent) groupsComponent!: GroupsComponent;

  SYSTEM_LEVEL = SYSTEM_LEVELS.MENU;

  filterValue: string = '';
  restaurant$: Observable<Restaurant> = this.menuService.getRestaurantById(
    this.route.snapshot.paramMap.get('id') || '',
  );
  cart$ = this.facade.cart$;
  quantity$ = this.facade.itemsQuantity$;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private facade: CartFacade,
  ) {
    this.restaurant$.subscribe({
      next: (restaurant) => console.log(restaurant),
    });
  }

  ngOnInit() {}

  filterList() {
    this.groupsComponent.filterItemList(this.filterValue);
  }
}
