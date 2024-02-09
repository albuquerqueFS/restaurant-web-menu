import { Component, Input } from '@angular/core';
import { Group } from 'src/@types/type';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styles: [],
})
export class GroupsComponent {
  @Input({ required: true }) groups: Group[] = [];
  filter: string = '';

  filterItemList(_filter: string) {
    this.filter = _filter;
  }

  filterItems(items: any[]) {
    return items.filter((item) =>
      item.name.toLowerCase().includes(this.filter.toLowerCase()),
    );
  }
}
