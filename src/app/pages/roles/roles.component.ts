import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  roles:any[]= [
    {
      id_rol: 5,
      descripcion:'DESCRIP ROL',
    },
  
    {
      id_rol: 5,
      descripcion:'DESCRIP ROL',
    },
    {
      id_rol: 5,
      descripcion:'DESCRIP ROL',
    },
    {
      id_rol: 5,
      descripcion:'DESCRIP ROL',
    },
    {
      id_rol: 5,
      descripcion:'DESCRIP ROL',
    }
  ]
}
