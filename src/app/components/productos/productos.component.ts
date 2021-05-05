import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private _productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
    console.log(this.productos);
  }
}
