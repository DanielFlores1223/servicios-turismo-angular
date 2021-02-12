import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario} from '../interfaces/Usuario';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URILogin = `${Dominio.URL}/api/login`;
  private URI = `${Dominio.URL}/api/usuario`;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  @Output() change1: EventEmitter<String> = new EventEmitter();

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post<any>(this.URILogin, {email, password});
  }

  loginExito(){
    this.change.emit(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  tipoUsu(){    
    this.change1.emit(localStorage.getItem('tipo'));
    return localStorage.getItem('tipo');
  }

  getUsuarioId(id: String){
    return this.http.get<Usuario>(`${this.URI}/${id}`);
  }

  getUsuariosTipo(tipo: String){
    return this.http.get<Usuario[]>(`${this.URI}-tipo/${tipo}`);
  }

  createUsuario(usuarioNew: Usuario){
    return this.http.post(this.URI, usuarioNew);
  }

  deleteUsuario(id: String){
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateUsuario(id: String, usuario: Usuario){
    return this.http.put(`${this.URI}/${id}`, usuario);
  }

}
