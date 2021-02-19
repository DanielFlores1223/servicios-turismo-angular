import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario, UsuarioObj } from '../../../interfaces/Usuario';
import {UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-afiliados',
  templateUrl: './edit-afiliados.component.html',
  styleUrls: ['./edit-afiliados.component.css']
})
export class EditAfiliadosComponent implements OnInit {
  afiliado = UsuarioObj;
  id = this.activatedRoute.snapshot.params.id;

  constructor(private router:Router, private usuarioService: UsuarioService ,private activatedRoute:ActivatedRoute) {
   
  }
  
  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUsuarioId(this.id).subscribe( res => {
      res.password = '';
     this.afiliado = res;
    });
  }

  updateUsuario(){
    if (this.validarFormulario()) {
      this.usuarioService.updateUsuario(this.id, this.afiliado).subscribe(async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La información se modificó correctamente.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar:true  
        });
  
        await this.router.navigate(['/afiliados']);
      }, 
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error!',
          text: 'Hubo un error, revise que este cumpliendo con todas las instrucciones.',
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
