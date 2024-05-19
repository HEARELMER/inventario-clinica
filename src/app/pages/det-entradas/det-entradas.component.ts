import { Component } from '@angular/core';

@Component({
  selector: 'app-det-entradas',
  standalone: true,
  imports: [],
  templateUrl: './det-entradas.component.html',
  styleUrl: './det-entradas.component.scss'
})
export class DetEntradasComponent {
  det_entradas:any[]= [
    {id:7189,
      id_prod: 555,
      marca:'poner aqui la marca',
      cant:24,
      precio:80.00,
      fecha_venc:'12-05-2024',
    },
  
    {id:7189,
      id_prod: 555,
      marca:'poner aqui la marca',
      cant:24,
      precio:80.00,
      fecha_venc:'12-05-2024',
    },
    {id:7189,
      id_prod: 555,
      marca:'poner aqui la marca',
      cant:24,
      precio:80.00,
      fecha_venc:'12-05-2024',
    },
    {id:7189,
      id_prod: 555,
      marca:'poner aqui la marca',
      cant:24,
      precio:80.00,
      fecha_venc:'12-05-2024',
    },
    {id:7189,
      id_prod: 555,
      marca:'poner aqui la marca',
      cant:24,
      precio:80.00,
      fecha_venc:'12-05-2024',
    }
  ]
}
