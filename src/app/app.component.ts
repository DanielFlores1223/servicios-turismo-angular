import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {UsuarioService} from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private usuarioService: UsuarioService) {

   }
  title = 'angular-photo-gallery';
  entrar = false;
  tipo = '';
  
ngOnInit(): void {
    this.usuarioService.change.subscribe(isOpen => {
      this.entrar = isOpen;
    });

    this.usuarioService.change1.subscribe(isOpen => {
      this.tipo = isOpen;
    });

    this.entrar = this.usuarioService.loginExito();
    this.tipo = this.usuarioService.tipoUsu();
  }
  
}
