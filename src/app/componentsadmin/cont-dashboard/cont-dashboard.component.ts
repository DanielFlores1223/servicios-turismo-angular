import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-cont-dashboard',
  templateUrl: './cont-dashboard.component.html',
  styleUrls: ['./cont-dashboard.component.css']
})
export class ContDashboardComponent implements OnInit {

  entrar=false
  
  nivelusu=" ";

  constructor(private router:Router,private serviciologin:CrudService) {
    this.nivelusu=localStorage.getItem('nombre');
     
  }

  ngOnInit(): void {
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
    await window.location.reload()
     
  }
  
}
