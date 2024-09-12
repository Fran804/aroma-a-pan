import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
