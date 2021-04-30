import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos = [
    {
      id: 1,
      titulo: 'Producto 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 2,
      titulo: 'Producto 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
      extraContent: 'CLASSIFIED',
    },
    {
      id: 3,
      titulo: 'Producto 35',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 4,
      titulo: 'Producto 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 5,
      titulo: 'Producto 5',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 6,
      titulo: 'Producto 6',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
