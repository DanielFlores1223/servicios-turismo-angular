import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Comerciante}from '../interfaces/comerciante';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //comerciante
  private modificarafil="http://localhost:4000/comerciante/modificar/"
  private loginafil="http://localhost:4000/comerciante/login"
  private eliminarafil="http://localhost:4000/comerciante/eliminar"
  private registrarafil="http://localhost:4000/comerciante/"
  private verafil="http://localhost:4000/comerciante/"
  private verfiltrado="http://localhost:4000/comerciante/ver/"
   //administrador
   private registroadmin="http://localhost:4000/usuario/"
   private loginadmin="http://localhost:4000/usuario/login"
   private veradmin="http://localhost:4000/usuario/"
   private eliminaradmin="http://localhost:4000/usuario/eliminar"
   private modificaradmin="http://localhost:4000/usuario/modificar"

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change1: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<boolean> = new EventEmitter();
  @Output() change3: EventEmitter<boolean> = new EventEmitter();
  

  constructor(private http: HttpClient) { }
  modificarafili(numerosocio:Number,comerciante:Comerciante){
    return this.http.put(this.modificarafil+numerosocio,comerciante)
  }
  registrarafili(comerciante){
    return this.http.post<any>(this.registrarafil,comerciante)
  }
  loginafili(comerciante){
    return this.http.post<any>(this.loginafil,comerciante)
  }
  eliminarafili(numerosocio:Number): Observable<any>{
   // return this.http.delete<any>(this.urllibros+"/"+libros.codigo)
    return this.http.delete(this.eliminarafil+"/"+numerosocio)
  }
  verafili() : Observable<Comerciante[]>{
    return this.http.get<Comerciante[]>(this.verafil)
  }
 
  consultarafili(numerosocio:Number) : Observable<Comerciante>{
    return this.http.get<Comerciante>(this.verfiltrado+numerosocio)
  }
  eslogueadoafili(){
    this.change2.emit(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }
  tipousuafili(){
  this.change3.emit(!!localStorage.getItem('tipo'))
  return !!localStorage.getItem('tipo')
  }
  //afiliado
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
