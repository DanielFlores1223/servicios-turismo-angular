import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/hotel.service';
import { Hotel } from '../../../interfaces/Hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  hoteles: Hotel[] = [];//creamos list vacia


  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
    this.hotelService.getHoteles()//utilizamos el metodo gethoteles y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.hoteles = res;//utilizamos la propiedad hoteles lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

  selectedButton(id: string) {
    this.router.navigate(['/hoteles', id]);//redirecciona
  }
  navegacion(){
    this.router.navigate(['hoteles/new'])
  }

}
