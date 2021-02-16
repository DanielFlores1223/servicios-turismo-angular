import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { Usuario, UsuarioObj } from '../../interfaces/Usuario';
import {UsuarioService} from '../../services/usuario.service';
import Swal from 'sweetalert2';

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
    if (this.afiliado.email === '' ||
        this.afiliado.nombre === '' ||
        this.afiliado.password === '' ||
        this.afiliado.telefono === '' ||
        this.afiliado.direccion === '') {
        
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
      return true;
    }
  }
}
  




