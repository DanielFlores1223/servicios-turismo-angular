import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comerciante } from 'src/app/interfaces/comerciante';
import { CrudService } from 'src/app/services/crud.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dash-afiliado',
  templateUrl: './dash-afiliado.component.html',
  styleUrls: ['./dash-afiliado.component.css']
})
export class DashAfiliadoComponent implements OnInit {
  entrar=false
  
  nivelusu=" ";

  constructor(private router:Router,private serviciologin: CrudService) {
    this.nivelusu=localStorage.getItem('nombre');
     
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    
    this.serviciologin.change.subscribe(isOpen =>{
      this.entrar=isOpen;
      
    });
    this.llenarEntrar(); 
  }
  llenarEntrar(){
    this.entrar=this.serviciologin.eslogueado(); 
  }

  async cerrarsession(){
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    localStorage.removeItem('nombre');
    this.llenarEntrar();
    await window.location.reload();
    await this.router.navigate(['paginaprincipal'])
     
  }
}
