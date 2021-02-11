import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import { Empresa } from '../../interfaces/Empresa';
import {Dominio} from '../../interfaces/Dominio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {
  //Variables
  pageActual: number = 1;//paginador
  url = Dominio.URL; //sirve para obtener las imagenes desde el servidor
  comercios: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.getComercios();
  }

  getComercios(){
    this.empresaService.getEmpresasGiro('Comercio').subscribe(
      res => this.comercios = res, 
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
