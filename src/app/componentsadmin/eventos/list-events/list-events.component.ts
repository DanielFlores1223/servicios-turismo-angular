import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../interfaces/Evento';
import { Router } from '@angular/router';
import {Dominio} from '../../../interfaces/Dominio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  eventos: Evento[] = [];//creamos list vacia
  pageActual = 1;
  url = Dominio.URL;

  constructor(private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {
    this.geEventos();
  }

  geEventos(){
    this.eventoService.getEventos()//utilizamos el metodo geteventos y retorna dos cosas la res y o un error
    .subscribe(
      res => {
        this.eventos = res;//utilizamos la propiedad eventos lin 12 y almacena lo que tenga la res
      },
      err => console.log(err)
    )
  }

  selectedButton(id: string) {
    this.router.navigate(['/eventos', id]);//redirecciona
  }

  navegacion(){
    this.router.navigate(['eventos/new'])
  }

  deleteEvento(id: string) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar este evento?',
      text: "Una vez eliminada, la información no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.eventoService.deleteEvento(id)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Evento eliminado',
          showConfirmButton: false,
          timer: 2000
        })

        this.geEventos();
        this.router.navigate(['/eventos']);
      })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El evento NO se borró :)',
          'error'
        )
      }
    })
    
  }

}
