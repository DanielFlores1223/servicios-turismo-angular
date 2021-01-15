import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Hotel} from '../interfaces/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  URI = 'http://localhost:4000/api/hoteles';


  constructor(private http: HttpClient) { }


  createHotel(nombre: string, telefono: string, link: string, descripcion: string, photo: File) {
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('telefono', telefono);
    fd.append('link', link);
    fd.append('descripcion', descripcion);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }

  getHoteles() {
    return this.http.get<Hotel[]>(this.URI);//<Evento>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getHotel(id: string) {
    return this.http.get<Hotel>(`${this.URI}/${id}`);
  }

  deleteHotel(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateHotel(id: string, nombre: string, telefono: string, link: string, descripcion: string) {
    return this.http.put(`${this.URI}/${id}`, {nombre, telefono, link, descripcion});
  }
}
