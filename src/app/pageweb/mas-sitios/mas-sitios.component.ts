import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Sitio } from 'src/app/interfaces/Sitio';
import { SitioService } from 'src/app/services/sitio.service';
import {Dominio} from '../../interfaces/Dominio';

@Component({
  selector: 'app-mas-sitios',
  templateUrl: './mas-sitios.component.html',
  styleUrls: ['./mas-sitios.component.css']
})
export class MasSitiosComponent implements OnInit {
  pageActual: number = 1;
  sitios: Sitio[] = [];//creamos list vacia
  url = Dominio.URL;
  categoria = this.activatedRoute.snapshot.params.categoria;

  constructor(private sitioService: SitioService, private ruta: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //Detecta cambios en el parametro de la ruta massitios
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.categoria = params.get('categoria');
      
      this.sitioService.getSitioCategoria(this.categoria)
      .subscribe(
        res => {
          this.sitios = res;
        },
        err => console.log(err)
      );

    })
  }
  scroll(){
    window.scroll(0,0);
  }

}
