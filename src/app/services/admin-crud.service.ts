import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Comerciante}from '../interfaces/comerciante';
import {Dominio} from '../interfaces/Dominio';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCrudService {
//administrador
private registroadmin=`${Dominio.URL}/usuario/`
private loginadmin=`${Dominio.URL}/usuario/login`
private veradmin=`${Dominio.URL}/usuario/`
private eliminaradmin=`${Dominio.URL}/usuario/eliminar`
private modificaradmin=`${Dominio.URL}/usuario/modificar`

@Output() change: EventEmitter<boolean> = new EventEmitter();
@Output() change1: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  iniciosesion(usuario){
    return this.http.post<any>(this.loginadmin,usuario)
   }
   registrouser(usuario){
     return this.http.post<any>(this.registroadmin,usuario)
   } 
   eslogueado(){
     this.change1.emit(!!localStorage.getItem('token'))
     return !!localStorage.getItem('token')
   }
   tipousu(){
   this.change.emit(!!localStorage.getItem('tipo'))
   return !!localStorage.getItem('tipo')
   }
   eliminaradministrador(usuario){
    return this.http.post<any>(this.eliminaradmin,usuario)
   }
   modificaradministrador(usuario){
    return this.http.post<any>(this.modificaradmin,usuario)
   }
   veradministrador(){
    return this.http.get<any>(this.veradmin)
   }
}
