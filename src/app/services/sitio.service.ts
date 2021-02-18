import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sitio} from '../interfaces/Sitio';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class SitioService {

 private URI = `${Dominio.URL}/api/sitios`;


  constructor(private http: HttpClient) { }

  createSitio(nombresitio: string, subtitulo: string, descripcioncorta: string, contenido1: string, contenido2: string, photo: File) {
    const fd = new FormData();
    fd.append('nombresitio', nombresitio);//se crea un campo a este formulario title y se pasa el valor del input
    fd.append('subtitulo', subtitulo);
    fd.append('descripcioncorta', descripcioncorta);
    fd.append('contenido1', contenido1);
    fd.append('contenido2', contenido2);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);//retornamos una peticion post a la ruta
  }

  getSitios() {
    return this.http.get<Sitio[]>(this.URI);//<Sitio>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getSitio(id: string) {
    return this.http.get<Sitio>(`${this.URI}/${id}`);
  }

  deleteSitio(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateSitio(id: string, nombresitio: string, subtitulo: string, descripcioncorta: string, contenido1: string, contenido2: string) {
    return this.http.put(`${this.URI}/${id}`, {nombresitio, subtitulo, descripcioncorta, contenido1, contenido2});
  }

  updateSitioImage(photo: File, id: String){
    const fd = new FormData();
    fd.append('image', photo);
    return this.http.put(`${this.URI}-image/${id}`, fd);
  }
}
