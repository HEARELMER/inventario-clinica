import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {
  categorias:any[]= [
    {
      id_cat: 555,
      descripcion:'DESCRIP CATEGORIA',
    },
  
    {
      id_cat: 555,
      descripcion:'DESCRIP CATEGORIA',
    },
    {
      id_cat: 555,
      descripcion:'DESCRIP CATEGORIA',
    },
    {
      id_cat: 555,
      descripcion:'DESCRIP CATEGORIA',
    },
    {
      id_cat: 555,
      descripcion:'DESCRIP CATEGORIA',
    }
  ]
}
