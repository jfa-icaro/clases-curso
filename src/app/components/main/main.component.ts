import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<p>hola, soy {{nombreDelPadre}}</p>',
  styles: ['p {color:blue;}'],
})
export class MainComponent {
  @Input() nombreDelPadre: string = '';
}
