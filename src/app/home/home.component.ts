import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.title{color:red;}'],
})
export class HomeComponent {
  nombre = 'Juan';
}
