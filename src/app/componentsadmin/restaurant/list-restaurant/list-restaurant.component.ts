import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../../services/restaurante.service';
import { Restaurante } from '../../../interfaces/Restaurante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  restaurantes: Restaurante[] = [];//creamos list vacia


  constructor(private restauranteService: RestauranteService, private router: Router) { }

  ngOnInit(): void {
    this.restauranteService.getRestaurantes()//utilizamos el metodo getres y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.restaurantes = res;//utilizamos la propiedad eventos lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

  selectedButton(id: string) {
    this.router.navigate(['/restaurantes', id]);//redirecciona
  }
  navegacion(){
    this.router.navigate(['restaurantes/new'])
  }

}
