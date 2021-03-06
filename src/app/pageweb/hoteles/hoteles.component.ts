import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import { Empresa } from '../../interfaces/Empresa';
import {Dominio} from '../../interfaces/Dominio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  //Variables
  pageActual: number = 1;//paginador
  url = Dominio.URL; //sirve para obtener las imagenes desde el servidor
  hoteles: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }
  ngOnInit(): void {
    this.getHoteles();
  }

  getHoteles(){
    this.empresaService.getEmpresasGiro('Hotel').subscribe(
      res => this.hoteles = res, 
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
