import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.css'
})
export class SeparatorComponent {
  @Input() nameSeparator: string = '';
  @Input() subtitleSeparator: string = '';
}
