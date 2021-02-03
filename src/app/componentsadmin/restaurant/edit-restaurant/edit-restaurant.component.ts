import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { RestauranteService } from '../../../services/restaurante.service';
import {Restaurante} from '../../../interfaces/Restaurante';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  id: string;
  restaurante: Restaurante;
  url = Dominio.URL;

  constructor(private activatedRoute: ActivatedRoute,private restauranteService: RestauranteService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.restauranteService.getRestaurante(this.id)//una vez tengo ese valor  desde resservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.restaurante = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteRestaurante(id: string) {
    this.restauranteService.deleteRestaurante(id)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Restaurante eliminado',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res)
        this.router.navigate(['/restaurantes']);
      })
  }

  updateRestaurante(nombreRes: HTMLInputElement, descripcion: HTMLInputElement, direccion: HTMLInputElement, link: HTMLInputElement): boolean {
    this.restauranteService.updateRestaurante(this.restaurante._id, nombreRes.value, descripcion.value, direccion.value, link.value)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Restaurante modificado con exito',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res);
        this.router.navigate(['/restaurantes'])
      },
      error => console.log(error)
      )
    return false;//return un false para cancel el event
  }

}
