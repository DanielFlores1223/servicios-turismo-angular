import { Component, OnInit } from '@angular/core';
import { SitioService } from '../../../services/sitio.service';
import { Sitio } from '../../../interfaces/Sitio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sitios',
  templateUrl: './list-sitios.component.html',
  styleUrls: ['./list-sitios.component.css']
})
export class ListSitiosComponent implements OnInit {

  sitios: Sitio[] = [];//creamos list vacia


  constructor(private sitioService: SitioService, private router: Router) { }

  ngOnInit(): void {
    this.sitioService.getSitios()//utilizamos el metodo getsitios y retorna dos cosas la res y o un error
    .subscribe(
      res => {
        this.sitios = res;//utilizamos la propiedad sitios lin 12 y almacena lo que tenga la res
      },
      err => console.log(err)
    )
  }

  selectedButton(id: string) {
    this.router.navigate(['/sitios', id]);//redirecciona
  }
  navegacion(){
    this.router.navigate(['sitios/new'])
  }

}
