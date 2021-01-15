import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { HotelService } from '../../../services/hotel.service';
import {Hotel} from '../../../interfaces/Hotel';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {

  id: string;
  hotel: Hotel;

  constructor(private activatedRoute: ActivatedRoute,private hotelService: HotelService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.hotelService.getHotel(this.id)//una vez tengo ese valor  desde hotelservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.hotel = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteHotel(id: string) {
    this.hotelService.deleteHotel(id)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Hotel eliminado',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res)
        this.router.navigate(['/hoteles']);
      })
  }

  updateHotel(nombre: HTMLInputElement, telefono: HTMLInputElement, link: HTMLInputElement, descripcion: HTMLInputElement): boolean {
    this.hotelService.updateHotel(this.hotel._id,nombre.value, telefono.value, link.value, descripcion.value)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Hotel modificado con exito',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res);
        this.router.navigate(['/hoteles'])
      },
      error => console.log(error)
      )
    return false;//return un false para cancel el event
  }

}
