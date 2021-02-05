import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CrudService } from '../../services/crud.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-afiliado',
  templateUrl: './login-afiliado.component.html',
  styleUrls: ['./login-afiliado.component.css']
})
export class LoginAfiliadoComponent implements OnInit {

  comerciante={
    nombre:"",
    email:"",
    numerodesocio:"",
    password:"",
    tipo:""
  }

  constructor(private router:Router,private serviciologin:CrudService ) { }

  async ngOnInit(): Promise<void> {
    await this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd)) { 
       return; 
      } 
      window.scrollTo(0, 0) 
     }); 
     
  }
 @HostListener('login')
  loginc(){
    this.serviciologin.loginafili(this.comerciante)
    .subscribe(async  res=>{
     console.log(res);
      console.log(res)
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 2000
  
      }),
      localStorage.setItem('token',res.envio[0])
      localStorage.setItem('nombre',res.envio[1])
      localStorage.setItem('tipo', res.envio[2])
      localStorage.setItem('i', res.envio[3])
      this.serviciologin.eslogueadoafili()
      this.serviciologin.tipousuafili()
      
      this.router.navigate(['empresa/new'])
      
      
    },
    err=> Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'numero de socio o contraseña invalido',
      showConfirmButton: false,
      timer: 1500

    })
    )
  }
  loginAdmin(){
    this.router.navigate(['iniciosesion']);
  }

}
