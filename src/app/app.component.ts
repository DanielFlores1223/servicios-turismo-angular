import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { CrudService } from './services/crud.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,private serviciologin: CrudService) {

   }
  title = 'angular-photo-gallery';
  entrar= false;
  tipo = false;
  nivelusu= " ";
  
 async ngOnInit(): Promise<void> {
   
  this.serviciologin.change1.subscribe(isOpen =>{
    this.entrar=isOpen;
  });
  this.serviciologin.change.subscribe(isOpen =>{
    this.tipo=isOpen;
    this.nivelusu=localStorage.getItem('tipo');
  });
  this.serviciologin.change3.subscribe(isOpen =>{
    this.tipo=isOpen;
    this.nivelusu=localStorage.getItem('tipo');
  });
    
    this.llenarEntrar();
    //start preloader
    this.spinner.show();
    setTimeout(() => {
       //spinner ends after 5 seconds 
      this.spinner.hide();
    }, 3000); 
  }
  llenarEntrar(){
    this.entrar=this.serviciologin.eslogueado();  
    this.tipo=this.serviciologin.tipousu(); 
  }
  
  cerrarsession(){
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    this.llenarEntrar();
  }
}
