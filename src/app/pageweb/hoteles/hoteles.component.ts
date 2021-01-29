import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
pageActual: number = 1;//paginador

  constructor(private hotelService: HotelService,) { }
  hoteles: Hotel[] = [];//creamos list vacia
  ngOnInit(): void {
    this.hotelService.getHoteles()//utilizamos el metodo gethoteles y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.hoteles = res;//utilizamos la propiedad hoteles lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

}
