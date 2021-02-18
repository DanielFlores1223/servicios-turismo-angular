import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario, UsuarioObj } from '../../../interfaces/Usuario';
import {UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-afiliados',
  templateUrl: './form-afiliados.component.html',
  styleUrls: ['./form-afiliados.component.css']
})
export class FormAfiliadosComponent implements OnInit {
  
  afiliado = UsuarioObj;

  constructor(private usuarioService: UsuarioService, private router:Router) { }
  

  ngOnInit(): void {

  }

  registrar(){
    if (this.validarFormulario()) {
      this.afiliado.tipo = 'afiliado';
      this.usuarioService.createUsuario(this.afiliado).subscribe(async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El Afiliado se registró correctamente.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar:true  
        });
        this.limpiarFormulario();
        await this.router.navigate(['/afiliados']);
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error!',
          text: 'El correo eléctronico que intenta registrar ya existe.',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
      });
    }
  }
  validarFormulario(){
    const validCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    if (this.afiliado.email === '' ||
        this.afiliado.nombre === '' ||
        this.afiliado.password === '') {
    
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
  
  limpiarFormulario(){
    this.afiliado.email =''; 
    this.afiliado.nombre =''; 
    this.afiliado.password =''; 
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
