import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2'

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
  @Input() imgLink: string = '';

  constructor() { }

  ngOnInit() {
  }

  openImage(img: string) {
    Swal.fire({
      imageUrl: img,
      imageAlt: "Imagen dañada, disculpe los inconvenientes",
      showConfirmButton: false,
    });
  }

}
