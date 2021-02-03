import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Comerciante}from '../interfaces/comerciante';
import {Dominio} from '../interfaces/Dominio';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //comerciante
  private modificarafil=`${Dominio.URL}/comerciante/modificar/`
  private loginafil=`${Dominio.URL}/comerciante/login`
  private eliminarafil=`${Dominio.URL}/comerciante/eliminar`
  private registrarafil=`${Dominio.URL}/comerciante/`
  private verafil=`${Dominio.URL}/comerciante/`
  private verfiltrado=`${Dominio.URL}/comerciante/ver/`
   
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
   eslogueado(){
     this.change1.emit(!!localStorage.getItem('token'))
     return !!localStorage.getItem('token')
   }
   tipousu(){
   this.change.emit(!!localStorage.getItem('tipo'))
   return !!localStorage.getItem('tipo')
   }
}
