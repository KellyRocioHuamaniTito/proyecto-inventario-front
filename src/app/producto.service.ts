import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/inventario-app/productos';

  constructor(private clientHttp: HttpClient) {}

  obtenerProductosLista(): Observable<Producto[]> {
    console.log("Obtener productos: ", this.clientHttp.get<Producto[]>(this.urlBase));
    return this.clientHttp.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto):Observable<Object>{
    return this.clientHttp.post(this.urlBase, producto);
  }

}
