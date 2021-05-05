import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nombre = 'AllFather';
  nombreDelHijo = '';

  preguntarQueQuiere(nombre: string) {
    this.nombreDelHijo = nombre;
  }
}
