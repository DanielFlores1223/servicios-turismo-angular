import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Usuario } from '../../interfaces/Usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-cont-dashboard',
  templateUrl: './cont-dashboard.component.html',
  styleUrls: ['./cont-dashboard.component.css']
})
export class ContDashboardComponent implements OnInit {

  entrar = false;
  miInfo : Usuario;
  id: String = localStorage.getItem('token');

  constructor(private router:Router, private usuarioService: UsuarioService) {
    
     
  }

  ngOnInit(): void {
    this.obtenerMiInfo();
  }

  //validar que el tipo de usuario no se cambie manualmente en el localStorage
  validarTipoUsuario(){
     let tipoStorage = this.usuarioService.tipoUsu();
     const {tipo} = this.miInfo;

     console.log(tipo);
     console.log(tipoStorage);
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
      this.miInfo = res
      this.validarTipoUsuario();
    });
  }
  
  async cerrarsession(){
    localStorage.clear();
    this.entrar = this.usuarioService.loginExito();
    this.router.navigate(['/paginaprincipal'])
     
  }
  
}
