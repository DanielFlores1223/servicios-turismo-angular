import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
//import { CrudService } from './services/crud.service';
import {UsuarioService} from './services/usuario.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,/*private serviciologin: CrudService*/ private usuarioService: UsuarioService) {

   }
  title = 'angular-photo-gallery';
  entrar = false;
  tipo = '';
  //nivelusu= "";
  
ngOnInit(): void {
    this.usuarioService.change.subscribe(isOpen => {
      this.entrar = isOpen;
    });

    this.usuarioService.change1.subscribe(isOpen => {
      this.tipo = isOpen;
    });

    this.entrar = this.usuarioService.loginExito();
    this.tipo = this.usuarioService.tipoUsu();

   /*
      this.serviciologin.change1.subscribe(isOpen =>{
        this.entrar = isOpen;
      });
       
      this.serviciologin.change3.subscribe(isOpen =>{
          this.tipo = isOpen;
      });
      
        this.entrar=this.serviciologin.eslogueado();  
        this.tipo=this.serviciologin.tipousu(); 

        //start preloader
        this.spinner.show();
        setTimeout(() => {
           //spinner ends after 5 seconds 
          this.spinner.hide();
        }, 3000); */
  }
  
}
