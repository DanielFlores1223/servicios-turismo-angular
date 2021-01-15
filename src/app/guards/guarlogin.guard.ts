import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {CrudService} from '../services/crud.service';


@Injectable({
  providedIn: 'root'
})
export class GuarloginGuard  {
  constructor(private router:Router,private useradminservice:CrudService){}
  
  canActivate():boolean{
    if(this.useradminservice.eslogueado()){
      return true;
    }else{
      this.router.navigate(["paginaprincipal"])
      return false;
    }
  }
  
}
