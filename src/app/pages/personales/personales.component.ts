import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personales.component.html',
  styleUrl: './personales.component.scss'
})
export class PersonalesComponent {
  visible:boolean = false;

  nuevo():void{
    this.visible = !this.visible;
  }
}
