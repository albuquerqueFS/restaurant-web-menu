import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { getItemById } from 'src/assets/mock/db.data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  private router = inject(ActivatedRoute);
  private menuService = inject(MenuService);

  // item = getItemById(
  //   this.router.snapshot.paramMap.get('id') || '',
  //   Number(this.router.snapshot.paramMap.get('item_id') || ''),
  // );
  item$ = this.menuService.getItemById(
    this.router.snapshot.paramMap.get('id') || '',
    this.router.snapshot.paramMap.get('group_id') || '',
    this.router.snapshot.paramMap.get('item_id') || '',
  );
}
