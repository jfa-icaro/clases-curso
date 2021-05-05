import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  nombre = 'BestSon';

  @Input() nombreDelPadre: any;

  @Output() emisorDeEvento = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.emisorDeEvento.emit(this.nombre);
  }

  // llamarAtencion() {
  //   console.log('estoy intentando llamar la atencion');
  //   this.emisorDeEvento.emit();
  // }
}
