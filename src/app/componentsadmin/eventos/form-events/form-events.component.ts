import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../services/evento.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';




interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo


  constructor(private eventoService: EventoService, private router: Router) { }

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
  uploadEvento(nombreEvento: HTMLInputElement, direccion: HTMLInputElement, fecha_inicio: HTMLInputElement, fecha_fin: HTMLInputElement, descripcion: HTMLTextAreaElement) {
    if (nombreEvento.value !== '' && 
        direccion.value !== '' && 
        fecha_inicio.value !== '' && 
        fecha_inicio.value !== '' &&
        fecha_fin.value !== ''&&
        descripcion.value !== ''&&
        this.file !== undefined) {

        const tipoImagen = this.file.type.split('/');
          if(tipoImagen[0] !== 'image'){
            Swal.fire({
              position:'center',
              icon:'error',
              title:'El Formato de imagen que intentó subir no se permite.',
              text: 'Intente con una imagen en formato .png/.jpg',
              showConfirmButton: false,
              timer: 4000,
              timerProgressBar:true
            })
          }else{
            this.eventoService.createEvento(nombreEvento.value, direccion.value, fecha_inicio.value, fecha_fin.value, descripcion.value, this.file)//retorna respuesta y usamos
            //el metodo subscribe
              .subscribe(
                async res => {
        
                  await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Evento registrado con exito',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar:true  
                  })
                  console.log(res);
                  this.router.navigate(['/eventos']);
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
    }else{
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
