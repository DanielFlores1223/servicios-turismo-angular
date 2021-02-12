import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/Usuario';
import {UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  pageActual: number = 1;//paginador
  administradores: Usuario[] = [];//creamos list vacia

  constructor(private usuarioService: UsuarioService, private ruta : Router) { 
    
  }

  ngOnInit() {
    this.getAdministradores();
  }

  getAdministradores(){
    this.usuarioService.getUsuariosTipo('admin').subscribe(
      res => this.administradores = res, 
      err =>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'Al parecer hubó un error, recargue la página',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar:true  
        });
      });
  }

  mostrarConfirmacionDelete(id: String){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar este Administrador?',
      text: "Una vez eliminada, la información no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //revisamos que el usuario se elimino correctamente
        if (this.deleteUsuario(id)) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'El Administrador se eliminó correctamente.',
            'success'
          )
          this.getAdministradores();
          this.ruta.navigate(['/administradoresLista']);
        }   
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El administrador no se borró :)',
          'error'
        )
      }
    })
  }

  deleteUsuario(id: String){
   const eliminado = this.usuarioService.deleteUsuario(id).subscribe( 
     res => true, 
     err => false);

   if (eliminado) 
      return true;
   else
     return false;
   
  }

  
}
