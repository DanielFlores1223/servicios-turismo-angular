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
    
    if (this.usuario.direccion === '' ||
        this.usuario.email === '' ||
        this.usuario.nombre === '' ||
        this.usuario.password === '' ||
        this.usuario.telefono === '') {
        
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Revise que los campos obligatorios esten llenos',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          });

          return false;
    }else{
      return true;
    }
  }

  limpiarFormulario(){
    this.usuario.direccion =''; 
    this.usuario.email =''; 
    this.usuario.nombre =''; 
    this.usuario.password =''; 
    this.usuario.telefono ='';
  }
  

}
