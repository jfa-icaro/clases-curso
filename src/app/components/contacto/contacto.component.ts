import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  mostrarForm = true;
  textoEstadoBoton = 'Mostrar Boton';
  cantInputs: number;
  name = '';

  toggleForm(): void {
    this.mostrarForm = !this.mostrarForm;

    console.log('mostrarForm esta en: ', this.mostrarForm);
  }

  constructor() {
    this.cantInputs = 5;
  }

  ngOnInit(): void {
    console.log('me estoy inicializando');
  }
}
