import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {
  productos: Producto[];
  constructor(private productoServicio: ProductoService){}

  ngOnInit(){
    //cargamos todos los productos
    this.obtenerProductos();
  }

  private obtenerProductos(){
    console.log("Función obtenerProductos llamada");
    //consumir los datos del observable (suscribirme)
    this.productoServicio.obtenerProductosLista().subscribe(
      (datos =>{
        this.productos = datos;
      }

      )
    );
  }

}
