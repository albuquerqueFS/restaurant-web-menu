import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupsComponent } from 'src/app/components/menu/groups/groups.component';
import { MenuService } from 'src/app/services/menu.service';
import { getRestaurantById } from 'src/assets/mock/db.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild(GroupsComponent) groupsComponent!: GroupsComponent;

  private route = inject(ActivatedRoute);
  private menuService = inject(MenuService);

  filterValue: string = '';
  restaurant$: Observable<Restaurant> = this.menuService.getRestaurantById(
    this.route.snapshot.paramMap.get('id') || '',
  );

  constructor() {}

  filterList() {
    this.groupsComponent.filterItemList(this.filterValue);
  }
}
