import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../interfaces/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  URI = 'http://localhost:4000/api/empresas';

  constructor(private http: HttpClient) { }

  createEmpresa(nombreEmpresa: string, giro: string, redsocial: string, telefono: string, photo: File) {
    const fd = new FormData();
    fd.append('nombreEmpresa', nombreEmpresa);
    fd.append('giro', giro);
    fd.append('redsocial', redsocial);
    fd.append('telefono', telefono);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }

  getEmpresas() {
    return this.http.get<Empresa[]>(this.URI);//<Empresa>retorna un arreglo de fotos e importamos la interfaz lin 3
  }

  getEstatusEmpresa(estatus: string){
    return this.http.get<Empresa[]>(`${this.URI}-estatus/${estatus}`);
  }

  getEmpresa(id){
    return this.http.get<Empresa>(`${this.URI}/${id}`);
  }

  updateEstatus(estatus: string, id: string){
    return this.http.put<Empresa[]>(`${this.URI}/${id}`, { estatus })
  }

  deleteEmpresaSolicitud(id:string){
    return this.http.delete(`${this.URI}/${id}`);
  }

}
