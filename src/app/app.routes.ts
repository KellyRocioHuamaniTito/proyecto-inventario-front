import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { NgModule } from '@angular/core';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

//http:localhost:4200/productos
export const routes: Routes = [
    {path:'productos',component: ProductoListaComponent},
    {path: '', redirectTo:'productos', pathMatch:'full'},
    {path: 'agregar-producto', component: AgregarProductoComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutes{}