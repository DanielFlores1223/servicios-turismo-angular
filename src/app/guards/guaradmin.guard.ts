import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuaradminGuard implements CanActivate {
  
  constructor(private router:Router,private adminservice:UsuarioService){}
  canActivate():boolean{
    if(this.adminservice.tipoUsu() == 'admin' ){
      return true;
    }else if(this.adminservice.tipoUsu()=='afiliado'){
      this.router.navigate(["empresa/new"])
      return false;
      }else{
      this.router.navigate(["paginaprincipal"])
      return false;
    }
  }
  
}
