import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent,
        children:[
            {path:'products', component:ProductsComponent},
            {path:'entradas', component:EntradasComponent},
            {path:'proveedores', component:ProveedoresComponent},

        ]
    }
];
