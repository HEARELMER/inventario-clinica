import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService, private router:Router){}
  passwordVisible:boolean = false;
  showPassword(){
    this.passwordVisible = !this.passwordVisible;
  }

 user:any={
  id_usuario: '',
  password: ''
 }
  // login(){
  //   const userData:User ={
  //     id_usuario: this.user.id_usuario,
  //     password: this.user.password
  //   }
  //   this.authService.loginWithId(userData).subscribe((res)=>{
  //     alert('Logged in successfully!')
  //     const userDataJson = JSON.stringify(res)
  //     // this.isAuthenticated.next(true);
  //     localStorage.setItem('user', userDataJson);
  //     this.router.navigate(['/dashboard/home-admin'])
  //   })
  // }
  
//  loginGoogle() {
//     try{
//       // alert('hola')
//        this.authService.loginWithGoogle()
//       // this.router.navigate(['/dashboard/home-admin'])
//     }catch(error){
//       alert(error)
//     }
    
//   }
}
