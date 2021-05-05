import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  today = new Date();
  saldo: number = 2678;

  constructor(private _productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
  }
}
