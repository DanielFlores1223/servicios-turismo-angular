import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comerciante } from 'src/app/interfaces/comerciante';
import { CrudService } from 'src/app/services/crud.service';
import {UsuarioService} from '../../services/usuario.service';
import { Usuario } from '../../interfaces/Usuario';

import * as $ from 'jquery';

@Component({
  selector: 'app-dash-afiliado',
  templateUrl: './dash-afiliado.component.html',
  styleUrls: ['./dash-afiliado.component.css']
})
export class DashAfiliadoComponent implements OnInit {
  
  entrar=false
  miInfo : Usuario;
  id: String = localStorage.getItem('token');
  nombre = '-';

  constructor(private router:Router,private serviciologin: CrudService, private usuarioService: UsuarioService) {  
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.obtenerMiInfo();
    
  }

  //validar que el tipo de usuario no se cambie manualmente en el localStorage
  validarTipoUsuario(){
    let tipoStorage = this.usuarioService.tipoUsu();
    const {tipo} = this.miInfo;

    if (tipoStorage === tipo) {
      return true;
    }else{
      localStorage.setItem('tipo', tipo);  
      tipoStorage = this.usuarioService.tipoUsu();  
      return false;
    }
 }

  obtenerMiInfo(){
   this.usuarioService.getUsuarioId(this.id).subscribe( async res => {
     this.miInfo = res;
     this.nombre = res.nombre;
     this.validarTipoUsuario();
   });
 }
  
  async cerrarsession(){
    localStorage.clear();
    this.entrar = this.usuarioService.loginExito();
    this.router.navigate(['/paginaprincipal'])
  }
}
