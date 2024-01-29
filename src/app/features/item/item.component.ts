import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/@types/type';
import { MenuService } from 'src/app/core/services/menu.service';
import { SYSTEM_LEVELS } from 'src/utils/constants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  SYSTEM_LEVEL = SYSTEM_LEVELS.ITEM;

  observation = new FormControl('');

  private router = inject(ActivatedRoute);
  private menuService = inject(MenuService);

  item$: Observable<Item> = this.menuService.getItemById(
    this.router.snapshot.paramMap.get('id') || '',
    this.router.snapshot.paramMap.get('group_id') || '',
    this.router.snapshot.paramMap.get('item_id') || '',
  );
}
