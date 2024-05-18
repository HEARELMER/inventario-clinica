import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  ismenuVisible: boolean = true;
  // 
  constructor(private adminDataService: AuthService, private menuService: ThemeService) {

  }
  toggleMenu(): void {
     this.ismenuVisible = !this.ismenuVisible;
  }
  
  admin:any = {
    username: '',
    photo_profile: '',
    email: '',
    // tokenAccesso: '',
    id_usuario :''
  }
  ngOnInit(): void {
  }
}
