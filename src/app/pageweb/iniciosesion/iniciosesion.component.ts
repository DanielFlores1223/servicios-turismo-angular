import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AdminCrudService } from '../../services/admin-crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  usuario={
    email:"",
    password:"",
    tipo:"",
  }
  nivelusu="";
  comerciante={
    numerosocio:"",
    password:"",
    tipo:""
  }
  constructor(private router:Router,private serviciologin:AdminCrudService) { }

  async ngOnInit(): Promise<void> {
    await this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd)) { 
       return; 
      } 
      window.scrollTo(0, 0) 
     }); 
     
  }
  @HostListener('login')
  login(){
    this.serviciologin.iniciosesion(this.usuario)
    .subscribe(async  res=>{
     
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
      this.serviciologin.eslogueado()
      this.serviciologin.tipousu()
      this.router.navigate(['/panel'])
      

    },
    err=> Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Corrreo o contraseña invalido',
      showConfirmButton: false,
      timer: 1500

    })
    )
  }
  navegacion(){
    this.router.navigate(["/registro"]);
  }

}
