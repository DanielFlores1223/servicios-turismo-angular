import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
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

  uploadEmpresa(nombreEmpresa: HTMLInputElement, giro: HTMLInputElement, redsocial: HTMLInputElement, telefono: HTMLInputElement) {
    this.empresaService.createEmpresa(nombreEmpresa.value, giro.value, redsocial.value, telefono.value, this.file)//retorna respuesta y usamos
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
  }

}
