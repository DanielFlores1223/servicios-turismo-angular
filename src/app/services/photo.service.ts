import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Photo} from '../interfaces/Photo';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos';

//instanciamos httpcliente en el construc
  constructor(private http: HttpClient) { }

  createPhoto(title: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);//se crea un campo a este formulario title y se pasa el valor del input
    fd.append('image', photo);
    return this.http.post(this.URI, fd);//retornamos una peticion post a la ruta
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.URI);//<Photo>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }
}
