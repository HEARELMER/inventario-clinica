import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // private menuService = inject(ThemeService)
  viewMenu:boolean = true;
  moreInfo:boolean = false;

  viewmoreInfo(){
    this.moreInfo = !this.moreInfo;
  }
  // viewSidebar(){
  //   console.log(this.menuService.menuVisible)
  //   console.log(this.menuService.menuVisible)
  //   this.menuService.menuVisible = !this.menuService.menuVisible;
  // }
  toggleMenu(){
   


  }

  admin:any = {
    username: 'Elmer Jesus',
    photo_profile: 'https://github.com/elmerxyz.png',
    email: 'elmer@gmail.com',
   
  }
  ngOnInit(): void {
    // alert('gol')
    // this.ismenuVisible = this.menuServie.menuVisible;
    // const adminSession = JSON.parse(localStorage.getItem('user') as string);
    // if (adminSession) {
    //   this.admin = adminSession;
    // }
    // console.log(adminSession);
  }
}
