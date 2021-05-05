import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
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
    {
      id: 7,
      titulo: 'Producto 7',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 8,
      titulo: 'Producto 8',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
    {
      id: 9,
      titulo: 'Producto 9',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, esse qui reprehenderit officia cum sed dignissimos? Minus',
    },
  ];

  getProductos() {
    return this.productos;
  }

  constructor() {}
}
