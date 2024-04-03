import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Styles = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() class = '';
  @Input() disabled = false;
  @Input() theme: Styles = 'primary';
  styles: { [key: string]: string } = {
    primary:
      ' border-wine-500 text-wine-500 hover:bg-wine-500 hover:text-white',
    secondary:
      ' bg-wine-500 border-wine-500 text-white hover:bg-white hover:text-wine-500',
  };
  selectedTheme = this.styles[this.theme];

  constructor() {}
}
