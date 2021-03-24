import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';

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
    
    if (res.envio[1] === 'admin') {
      //si es admin entonces se comienzan a guardar los permisos en un arreglo
      let permisos = res.envio[2];
      const {sitios,
        eventos,
        empresasValidadas,
        solicitudesEmpresas,
        administradores,
        afiliados,
        carrusel } = permisos;

      let arrayPermisos = [];

      //cada modulo que cuente con acceso se agregara al array de permisos
      //al terminar se guarda en localStorage
      //cada permiso cuenta con un id
      if (sitios === 'con acceso') 
        //spread operator: se hace una copia del arreglo y se guarda el segundo valor.
        arrayPermisos = [...arrayPermisos, '12101014ab70254c564c5c73e1'];
      
      if (eventos === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '15102014ab70254c564c5c73e1'];

      if (empresasValidadas === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '18103014ab70254c564c5c73e1'];
      
      if (solicitudesEmpresas === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '13104014ab70254c564c5c73e1'];

      if (administradores === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '11105014ab70254c564c5c73e1'];

      if (afiliados === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '18106014ab70254c564c5c73e1'];

      if (carrusel === 'con acceso') 
        arrayPermisos = [...arrayPermisos, '19107014ab70254c564c5c73e1'];

      localStorage.setItem('p', JSON.stringify(arrayPermisos));
        
    }
    


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
