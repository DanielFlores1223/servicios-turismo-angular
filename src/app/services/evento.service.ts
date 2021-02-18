import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Evento} from '../interfaces/Evento';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private URI = `${Dominio.URL}/api/eventos`;


  constructor(private http: HttpClient) { }

  createEvento(nombreEvento: string, direccion: string, fecha_inicio: string, fecha_fin: string, descripcion: string, photo: File) {
    const fd = new FormData();
    fd.append('nombreEvento', nombreEvento);//se crea un campo a este formulario title y se pasa el valor del input
    fd.append('direccion', direccion);
    fd.append('fecha_inicio', fecha_inicio);
    fd.append('fecha_fin', fecha_fin);
    fd.append('descripcion', descripcion);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);//retornamos una peticion post a la ruta
  }

  getEventos() {
    return this.http.get<Evento[]>(this.URI);//<Evento>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getEvento(id: string) {
    return this.http.get<Evento>(`${this.URI}/${id}`);
  }

  deleteEvento(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateEvento(id: string, nombreEvento: string, direccion: string, fecha_inicio: string, fecha_fin: string, descripcion: string) {
    return this.http.put(`${this.URI}/${id}`, {nombreEvento, direccion, fecha_inicio, fecha_fin, descripcion});
  }

  updateEventoImage(photo: File, id: String){
    const fd = new FormData();
    fd.append('image', photo);
    return this.http.put(`${this.URI}-image/${id}`, fd);

  }
}
