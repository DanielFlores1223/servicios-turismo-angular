import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Usuario, UsuarioObj } from '../../../interfaces/Usuario';
import {UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {
  usuario = UsuarioObj;

  constructor(private usuarioService: UsuarioService, private ruta : Router) { }

  async ngOnInit(): Promise<void> {
    
  }
  
  registrar(){
    if (this.validarFormulario()) {
      this.usuario.tipo = 'admin';
      this.usuarioService.createUsuario(this.usuario).subscribe(async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El Administrador se registró correctamente.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar:true  
        });
        this.limpiarFormulario();
        await this.ruta.navigate(['/administradoresLista']);
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error!',
          text: 'El correo eléctronico que intenta registrar ya existe en la base de datos.',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
      });
    }
  }
 
   
    
  validarFormulario(){
    const validCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    if (this.usuario.direccion === '' ||
        this.usuario.email === '' ||
        this.usuario.nombre === '' ||
        this.usuario.password === '' ||
        this.usuario.telefono === '') {
        
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
      if(!validCorreo.test(this.usuario.email)){
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
  limpiarFormulario(){
    this.usuario.direccion =''; 
    this.usuario.email =''; 
    this.usuario.nombre =''; 
    this.usuario.password =''; 
    this.usuario.telefono ='';
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
  soloNumeros(evento) {
    var key = evento.KeyCode || evento.which;
    var tecla = String.fromCharCode(key).toLocaleLowerCase();
    var letras = "1234567890";
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
