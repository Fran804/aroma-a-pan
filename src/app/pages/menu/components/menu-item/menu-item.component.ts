import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuTitle: string = '';
  @Input() menuPrice: string = '';
  @Input() hasGuarniciones: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
