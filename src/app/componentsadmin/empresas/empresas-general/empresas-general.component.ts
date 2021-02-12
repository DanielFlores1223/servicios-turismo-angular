import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../interfaces/Empresa';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';

@Component({
  selector: 'app-empresas-general',
  templateUrl: './empresas-general.component.html',
  styleUrls: ['./empresas-general.component.css']
})
export class EmpresasGeneralComponent implements OnInit {
  empresas: Empresa[] = [];
  empresaInfo: Empresa;
  pageActual = 1;
  opcionSeleccionado = 'Todos';
  url = Dominio.URL;

  constructor(private empresaService: EmpresaService, private ruta: Router) { }

  ngOnInit(): void {
    this.getEmpresasValidadas();
  }

  getEmpresasValidadas(){
    this.empresaService.getEmpresasGiro(this.opcionSeleccionado).subscribe(
      res => this.empresas = res, 
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'Al parecer hubó un error, recargue la  página',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar:true  
        });
    })
  }

  getEmpresa(id){
    this.empresaService.getEmpresa(id).subscribe(
      res => this.empresaInfo = res,
      error => console.log(error)
    );
  }


}
