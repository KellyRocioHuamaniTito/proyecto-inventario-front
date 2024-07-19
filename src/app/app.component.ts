import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component'; 
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ProductoListaComponent,AgregarProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventario-app';
}
