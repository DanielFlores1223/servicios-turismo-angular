import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/Usuario';
import {UsuarioService} from '../../../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-list-afiliados',
  templateUrl: './list-afiliados.component.html',
  styleUrls: ['./list-afiliados.component.css']
})
export class ListAfiliadosComponent implements OnInit {
  pageActual: number = 1;//paginador
 afiliados: Usuario[] = [];//creamos list vacia

  constructor(private usuarioService: UsuarioService, private router:Router) { 
    
  }
  ngOnInit(): void {
   this.getAfiliados();
  }

  getAfiliados(){
    this.usuarioService.getUsuariosTipo('afiliado').subscribe(
      res => this.afiliados = res, 
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
      title: '¿Estas seguro de eliminar este Afiliado?',
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
            'El Afiliado se eliminó correctamente.',
            'success'
          )
          this.getAfiliados();
          this.router.navigate(['/afiliados']);
        }   
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El Afiliado no se borró :)',
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
