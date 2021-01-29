import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConteoService {

  constructor(private http: HttpClient) { }
  URL1 = "http://localhost:4000/api/conteo1"
  URL2 = "http://localhost:4000/api/conteo2"
  URL3 = "http://localhost:4000/api/conteo3"
  URL4 = "http://localhost:4000/api/conteo4"
  URL5 = "http://localhost:4000/api/conteo5"

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

}

