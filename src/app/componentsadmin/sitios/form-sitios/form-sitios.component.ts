import { Component, OnInit } from '@angular/core';
import {SitioService} from '../../../services/sitio.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-form-sitios',
  templateUrl: './form-sitios.component.html',
  styleUrls: ['./form-sitios.component.css']
})
export class FormSitiosComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo

  constructor(private sitioService: SitioService, private router: Router) { }

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


  uploadSitio(nombresitio: HTMLInputElement, subtitulo: HTMLInputElement, descripcioncorta: HTMLTextAreaElement, contenido1: HTMLTextAreaElement, contenido2: HTMLTextAreaElement) {
    if (nombresitio.value !== '' && 
        subtitulo.value !== '' && 
        descripcioncorta.value !== '' && 
        contenido1.value !== '' &&
        contenido2.value !== '' &&
        this.file !== undefined) {

      const tipoImagen = this.file.type.split('/');
      if(tipoImagen[0] !== 'image'){
         Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El Formato de imagen que intentó subir no se permite.',
          text: 'Intente con una imagen en formato .png/.jpg',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true
        })
      }else{
    this.sitioService.createSitio(nombresitio.value, subtitulo.value, descripcioncorta.value, contenido1.value, contenido2.value, this.file)//retorna respuesta y usamos
    //el metodo subscribe
      .subscribe(
        async res => {
          //await this.updateImage();
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sitio turistico registrado con exito',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
          console.log(res);
          this.router.navigate(['/sitios']);
        },
        () => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Revise que los campos obligatorios esten llenos',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          });
         }
         );
      } 
    } else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Revise que los campos obligatorios esten llenos',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar:true  
      });
    }

    return false;//return un false para cancel el event
  }
}

