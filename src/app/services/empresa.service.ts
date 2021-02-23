import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa,EmpresaCreate} from '../interfaces/Empresa';
import {Dominio} from '../interfaces/Dominio';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private URI = `${Dominio.URL}/api/empresas`;

  constructor(private http: HttpClient) { }

  createEmpresa(datosEmpresa: EmpresaCreate, photo: File) {
    const {nombreEmpresa, 
           giro, 
           telefono, 
           estatus, 
           descripcion, 
           idComerciante ,
           paginaWeb,
           facebook, 
           twitter} = datosEmpresa;


    const fd = new FormData();
    fd.append('nombreEmpresa', nombreEmpresa);
    fd.append('giro', giro);
    fd.append('estatus', estatus);
    fd.append('descripcion', descripcion);
    fd.append('idComerciante', idComerciante);
    fd.append('paginaWeb', paginaWeb);
    fd.append('facebook', facebook);
    fd.append('twitter',twitter);
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

  getEmpresasGiro(giro: string){
    return this.http.get<Empresa[]>(`${this.URI}-giro/${giro}`);
  }

  updateEstatus(estatus: string, id: string){
    return this.http.put<Empresa[]>(`${this.URI}/${id}`, { estatus })
  }

  updateEmpresa(datosEmpresa: EmpresaCreate, id: String){
    return this.http.put(`${this.URI}-plus/${id}`, datosEmpresa);
  }

  updateEmpresaImage(photo: File, id: String){
    const fd = new FormData();
    fd.append('image', photo);
    return this.http.put(`${this.URI}-image/${id}`, fd);
  }

  updateObservaciones(observaciones: String, id: String){
    return this.http.put(`${this.URI}-observaciones/${id}`, { observaciones });
  }

  deleteEmpresaSolicitud(id:string){
    return this.http.delete(`${this.URI}/${id}`);
  }

  getsolicitud(id: string){

    return this.http.get<Empresa[]>(`${this.URI}-solicitudes-usuario/${id}`);
  }

}
