import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { Usuario, UsuarioObj } from '../../interfaces/Usuario';
import {UsuarioService} from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  afiliado = UsuarioObj;

  constructor(private usuarioRegService: UsuarioService, private router:Router) { }
  

  ngOnInit(): void {

  }
  navegacion(){
    this.router.navigate(["/loginAfiliado"]);
  }
  registrar(){
    if (this.validarCampos()) {
      this.afiliado.tipo = 'afiliado';
      this.usuarioRegService.createUsuario(this.afiliado).subscribe(async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Exitoso.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar:true  
        });
        await this.router.navigate(['/loginAfiliado']);
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error!',
          text: 'El correo eléctronico ya existe.',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
      });
    }
  }

  validarCampos(){
    const validCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    if (this.afiliado.email === '' ||
        this.afiliado.nombre === '' ||
        this.afiliado.password === '' ){
        //this.afiliado.telefono === '' ||
        //this.afiliado.direccion === '') {
        
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los campos deben estar llenos',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          });
          return false;
    }else{
      //console.log(this.usuario.email);
      if(!validCorreo.test(this.afiliado.email)){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No es un correo válido',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar:true  
        });
        return false;
      }else{
        return true; 
    }
  }
}
  
  soloLetras(evento) {
    var key = evento.KeyCode || evento.which;
    var tecla = String.fromCharCode(key).toLocaleLowerCase();
    var letras = "abcdefghijklmnñopqrstuvwxyzáéíóú";
    var especiales = [32, 8, 239];

    var tecla_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;

    } else {
        return true;
    }
  }
}
  




