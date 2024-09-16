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
  @Input() hasExtras: boolean = true;
  @Input() imgLink: string = "";

  constructor() { }

  ngOnInit() {
  }

  openImage(img: string) {
    Swal.fire({
      imageUrl: img,
      imageWidth: '80%',
      showConfirmButton: false,
      showCloseButton: true,
      imageAlt: "Imagen dañada, disculpe los inconvenientes",
    });
  }

  openGuarnicion() {
    Swal.fire({
      title: '<h2 class="title-font">Guarniciones disponibles</h2>',
      html: `
        <h3>Frijoles refritos</h3>
        <h3>Papas rostizadas</h3>
        <h3>Ensalada</h3>
        <h3>Chilaquiles</h3>
      `,
      showConfirmButton: false,
      showCloseButton: true
    });
  }

  openExtras() {
    Swal.fire({
      title: '<h2 class="title-font">Extras disponibles</h2>',
      html: `
        <h3>Huevo: $15</h3>
        <h3>Aguacate: $35</h3>
        <h3>Tsinc: $32</h3>
        <h3>Salmón crudo: $45</h3>
        <h3>Queso: $30</h3>
        <h3>Orden de papas hasbrown: $58</h3>
      `,
      showConfirmButton: false,
      showCloseButton: true
    });
  }

}
