import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuarpageWebGuard implements CanActivate {
  constructor(private router:Router,private pageWebservice:UsuarioService){}
  canActivate():boolean{

    if(!this.pageWebservice.loginExito()){
      return true;
    }else{
      if(this.pageWebservice.tipoUsu() == 'admin'){
        this.router.navigate(["panel"])
        return false;
      }else{
        this.router.navigate(["empresa/new"])
      return false;
      }
    }
  }   
}
  

