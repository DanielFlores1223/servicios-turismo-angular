import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Restaurante} from '../interfaces/Restaurante';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  URI = `${Dominio.URL}/api/restaurantes`;


  constructor(private http: HttpClient) { }

  createRestaurante(nombreRes: string, descripcion: string, direccion: string, link: string, photo: File) {
    const fd = new FormData();
    fd.append('nombreRes', nombreRes);
    fd.append('descripcion', descripcion);
    fd.append('direccion', direccion);
    fd.append('link', link);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }

  getRestaurantes() {
    return this.http.get<Restaurante[]>(this.URI);//<Restaurante>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getRestaurante(id: string) {
    return this.http.get<Restaurante>(`${this.URI}/${id}`);
  }

  deleteRestaurante(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateRestaurante(id: string, nombreRes: string, descripcion: string, direccion: string, link: string) {
    return this.http.put(`${this.URI}/${id}`, {nombreRes, descripcion, direccion, link});
  }
}
