import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class EventosAdminGuard implements CanActivate {
  constructor(private router:Router,private adminservice:UsuarioService){}
  

  canActivate(): boolean{
    let permisos = this.adminservice.getUsuarioPermisos();

    //se busca el id del permiso para ingresar a eventos
    //estos id se definen en login-afiliado.ts
    const encontrado = permisos.includes('15102014ab70254c564c5c73e1');

    if(encontrado){
        return true;
    }else{
      this.router.navigate(["/panel"])
      return false;
    }
  }
  
}
