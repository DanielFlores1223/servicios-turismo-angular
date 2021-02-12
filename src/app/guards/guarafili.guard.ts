import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Injectable({
  providedIn: 'root'
})
export class GuarafiliGuard implements CanActivate {
  constructor(private router:Router,private userafiliservice:UsuarioService){}

  canActivate():boolean{
      if(this.userafiliservice.tipoUsu() == 'afiliado'){
        return true;
      }else if(this.userafiliservice.tipoUsu() == 'admin'){
        this.router.navigate(["panel"])
        return false;
      }else{
        this.router.navigate(["paginaprincipal"])
        return false;
      }
    }  
  }
  

