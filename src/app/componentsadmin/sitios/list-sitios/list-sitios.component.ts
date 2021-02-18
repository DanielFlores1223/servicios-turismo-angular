import { Component, OnInit } from '@angular/core';
import { SitioService } from '../../../services/sitio.service';
import { Sitio } from '../../../interfaces/Sitio';
import { Router } from '@angular/router';
import {Dominio} from '../../../interfaces/Dominio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-sitios',
  templateUrl: './list-sitios.component.html',
  styleUrls: ['./list-sitios.component.css']
})
export class ListSitiosComponent implements OnInit {

  sitios: Sitio[] = [];//creamos list vacia
  pageActual = 1;
  url = Dominio.URL;

  constructor(private sitioService: SitioService, private router: Router) { }

  ngOnInit(): void {
    this.getSitios();
  }

  getSitios(){
    this.sitioService.getSitios()//utilizamos el metodo getsitios y retorna dos cosas la res y o un error
    .subscribe(
      res => {
        this.sitios = res;//utilizamos la propiedad sitios lin 12 y almacena lo que tenga la res
      },
      err => console.log(err)
    )
  }

  selectedButton(id: string) {
    this.router.navigate(['/sitios', id]);//redirecciona
  }
  navegacion(){
    this.router.navigate(['sitios/new'])
  }

  deleteSitio(id: string) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar este sitio turistico?',
      text: "Una vez eliminada, la información no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.sitioService.deleteSitio(id)
        .subscribe( async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sitio turistico eliminado',
            showConfirmButton: false,
            timer: 2000
          })
          
          this.getSitios();
          this.router.navigate(['/sitios']);
        });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El sitio turistico NO se borró :)',
          'error'
        )
      }
    })
  }

}
