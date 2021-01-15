import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/Restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  constructor(private restauranteService: RestauranteService,) { }
  restaurantes: Restaurante[] = [];//creamos list vacia
  ngOnInit(): void {
    this.restauranteService.getRestaurantes()//utilizamos el metodo getres y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.restaurantes = res;//utilizamos la propiedad eventos lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

}
