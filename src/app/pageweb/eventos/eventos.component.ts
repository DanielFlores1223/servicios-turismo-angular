import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];//creamos list vacia
  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.getEventos()//utilizamos el metodo geteventos y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.eventos = res;//utilizamos la propiedad eventos lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

}
