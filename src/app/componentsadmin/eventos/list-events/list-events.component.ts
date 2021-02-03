import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../interfaces/Evento';
import { Router } from '@angular/router';
import {Dominio} from '../../../interfaces/Dominio';

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

}
