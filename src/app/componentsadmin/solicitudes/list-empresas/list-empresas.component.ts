import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../interfaces/Empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  empresas: Empresa[] = [];//creamos list vacia


  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas()//utilizamos el metodo getempresas y retorna dos cosas la res y o un error
      .subscribe(
        res => {
          this.empresas = res;//utilizamos la propiedad empresas lin 12 y almacena lo que tenga la res
        },
        err => console.log(err)
      )
  }

}
