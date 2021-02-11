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
          text: 'Hubó un error, revise que este cumpliendo con todas las instrucciones.',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
      });
    }
   
  }

  validarFormulario(){
    if (this.afiliado.nombre === '') {      
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
 

}
