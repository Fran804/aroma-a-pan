import { Component } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SeparatorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
