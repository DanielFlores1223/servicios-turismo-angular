import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import {Empresa, EmpresaObj} from '../../interfaces/Empresa';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';



interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo
  solicitudEmpresa = EmpresaObj;

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {//recibe un objeto de tipo event
    if (event.target.files && event.target.files[0]){//si exsiste la propiedad files y que exista un file subido
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();//que utlice el objeto del navegador filereader para leer un archivo
      reader.onload = e => this.photoSelected = reader.result;//una vez leido el archivo
      reader.readAsDataURL(this.file);
    }
  }

  enviarSolicitudEmpresa(){
    //obtenemos el id del comerciante
    this.solicitudEmpresa.idComerciante = localStorage.getItem('i');
    this.solicitudEmpresa.estatus = 'Pendiente';
    
    if (this.validarCamposObligatorios()) {
      this.empresaService.createEmpresa(this.solicitudEmpresa, this.file).subscribe(
        async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su solicitud para anunciarte ha sido registrada con exito espere su validación',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
          console.log(res);
          window.location.reload();
        },
        err => {
           Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Revise que los campos obligatorios esten llenos',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
        }
      );
      return false;
    } 
  }

  validarCamposObligatorios(){
    
    if (this.solicitudEmpresa.descripcion === '' || this.solicitudEmpresa.giro === '' || this.solicitudEmpresa.nombreEmpresa === ''  || this.solicitudEmpresa.telefono === '' || this.solicitudEmpresa.idComerciante === '') {
    
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Revise que los campos obligatorios esten llenos',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar:true  
      });
      return false;
    }else{
      return true;
    } 
  }
  /*enviarSolicitudEmpresa(nombreEmpresa: HTMLInputElement, giro: HTMLInputElement, redsocial: HTMLInputElement, telefono: HTMLInputElement) {
    this.empresaService.createEmpresa(nombreEmpresa.value, this.file)//retorna respuesta y usamos
    //el metodo subscribe
      .subscribe(
        async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su empresa ha sido registrada con exito espere su validación',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
          console.log(res);
          window.location.reload();
        },
        err => console.log(err)
      );
    return false;
  }*/

}
