import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class ConteoService {

  constructor(private http: HttpClient) { }
  URL1 = `${Dominio.URL}/api/conteo1`
  URL2 = `${Dominio.URL}/api/conteo2`
  URL3 = `${Dominio.URL}/api/conteo3`
  URL4 = `${Dominio.URL}/api/conteo4`
  URL5 = `${Dominio.URL}/api/conteo5`
  URL6 = `${Dominio.URL}/api/conteo6`

  counthoteles() {
    return this.http.get(this.URL1);
  }

  countusuario() {
    return this.http.get(this.URL2);
  }

  countsitios() {
    return this.http.get(this.URL3);
  }
  
  countrestaurante(){
    return this.http.get(this.URL4);
  }

  counteventos() {
    return this.http.get(this.URL5);
  }
  countsitiosotros() {
    return this.http.get(this.URL6);
  }
}

