import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PersonalesComponent } from './pages/personales/personales.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent, pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent,
        children:[
            {path:'products', component:ProductsComponent},
            {path:'entradas', component:EntradasComponent},
            {path:'proveedores', component:ProveedoresComponent},
            {path:'categorias', component:CategoriasComponent},
            {path:'personales', component:PersonalesComponent},

        ]
    }
];
