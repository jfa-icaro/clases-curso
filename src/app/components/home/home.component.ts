import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today = new Date();
  saldo: number = 2678;

  constructor() { }

  ngOnInit(): void {
  }

}
