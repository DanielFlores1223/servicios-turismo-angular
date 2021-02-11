import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import { Empresa } from '../../interfaces/Empresa';
import {Dominio} from '../../interfaces/Dominio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  pageActual: number = 1;//paginador
  url = Dominio.URL; //sirve para obtener las imagenes desde el servidor
  restaurantes: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }
  
  ngOnInit(): void {
    this.getRestaurante();
  }

  getRestaurante(){
    this.empresaService.getEmpresasGiro('Restaurante').subscribe(
      res => this.restaurantes = res, 
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'Al parecer hubó un error, recargue la página',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar:true  
        });
      });
  }

}
