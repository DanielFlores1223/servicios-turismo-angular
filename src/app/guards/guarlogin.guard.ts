import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class GuarloginGuard  {
  constructor(private router:Router,private useradminservice:UsuarioService){}
  
  canActivate():boolean{
    if(this.useradminservice.loginExito()){
      return true;
    }else{
      this.router.navigate(["paginaprincipal"])
      return false;
    }
  }
  
}
