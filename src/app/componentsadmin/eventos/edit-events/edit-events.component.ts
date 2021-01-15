import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { EventoService } from '../../../services/evento.service';
import {Evento} from '../../../interfaces/Evento';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  id: string;
  evento: Evento;

  constructor(private activatedRoute: ActivatedRoute,private eventoService: EventoService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.eventoService.getEvento(this.id)//una vez tengo ese valor  desde eventoservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.evento = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteEvento(id: string) {
    this.eventoService.deleteEvento(id)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Evento eliminado',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res)
        this.router.navigate(['/eventos']);
      })
  }

  updateEvento(nombreEvento: HTMLInputElement, direccion: HTMLInputElement, fecha_inicio: HTMLInputElement, fecha_fin: HTMLInputElement, descripcion: HTMLInputElement): boolean {
    this.eventoService.updateEvento(this.evento._id,nombreEvento.value, direccion.value, fecha_inicio.value, fecha_fin.value, descripcion.value)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Evento modificado con exito',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res);
        this.router.navigate(['/eventos'])
      },
      error => console.log(error)
      )
    return false;//returna un false para cancel el event
  }

}
