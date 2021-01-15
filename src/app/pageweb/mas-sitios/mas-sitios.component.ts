import { Component, OnInit } from '@angular/core';
import { Sitio } from 'src/app/interfaces/Sitio';
import { SitioService } from 'src/app/services/sitio.service';

@Component({
  selector: 'app-mas-sitios',
  templateUrl: './mas-sitios.component.html',
  styleUrls: ['./mas-sitios.component.css']
})
export class MasSitiosComponent implements OnInit {
  pageActual: number = 1;
  sitios: Sitio[] = [];//creamos list vacia
  constructor(private sitioService: SitioService) { }

  ngOnInit(): void {
    this.sitioService.getSitios()//utilizamos el metodo getsitios y retorna dos cosas la res y o un error
    .subscribe(
      res => {
        this.sitios = res;//utilizamos la propiedad sitios lin 12 y almacena lo que tenga la res
      },
      err => console.log(err)
    )
  }
  scroll(){
    window.scroll(0,0);
  }

}
