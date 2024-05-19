import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.scss'
})
export class EntradasComponent {
  entradas:any[]= [
    {id:7189,
      des:'no se que poner aqui en la decripcion',
      fecha:'12-05-2024',
      ruc:718882,
      dni:718188818,
      document:'boleta'
    },
  
    {id:7189,
      des:'no se que poner aqui en la decripcion',
      fecha:'12-05-2024',
      ruc:718882,
      dni:718188818,
      document:'boleta'
    },
    {id:7189,
      des:'no se que poner aqui en la decripcion',
      fecha:'12-05-2024',
      ruc:718882,
      dni:718188818,
      document:'boleta'
    },
    {id:7189,
      des:'no se que poner aqui en la decripcion',
      fecha:'12-05-2024',
      ruc:718882,
      dni:718188818,
      document:'boleta'
    },
    {id:7189,
      des:'no se que poner aqui en la decripcion',
      fecha:'12-05-2024',
      ruc:718882,
      dni:718188818,
      document:'boleta'
    }
  ]
}
