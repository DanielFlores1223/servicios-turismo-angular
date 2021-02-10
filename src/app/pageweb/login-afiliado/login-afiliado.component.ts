import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-afiliado',
  templateUrl: './login-afiliado.component.html',
  styleUrls: ['./login-afiliado.component.css']
})
export class LoginAfiliadoComponent implements OnInit {


  constructor(private router:Router, private usuarioService: UsuarioService ) { }

  async ngOnInit(): Promise<void> {

    //al cargar el login el scroll se pocisiona en la coordenada x=0 y=15
    await this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd)) { 
       return; 
      } 
      window.scrollTo(0, 15) 
     }); 
     
  }

login(email: HTMLInputElement, password: HTMLInputElement){
  
  this.usuarioService.login(email.value, password.value).subscribe(async res => {

    //mostramos alerta de bienvenida
    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido',
      showConfirmButton: false,
      timer: 2000
    });

    localStorage.setItem('token',res.envio[0]);
    localStorage.setItem('tipo',res.envio[1]); 
    this.usuarioService.loginExito();
    const tipoUsu = this.usuarioService.tipoUsu();
    
    //Se define la ruta a navegar
    if (tipoUsu == 'admin') 
      this.router.navigate(['/panel']);  
    else if(tipoUsu == 'afiliado')
      this.router.navigate(['/empresa/new']);
    
  },
  err=> Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Correo eléctronico o contraseña incorrectos',
    showConfirmButton: false,
    timer: 1500

  }));
}


}
