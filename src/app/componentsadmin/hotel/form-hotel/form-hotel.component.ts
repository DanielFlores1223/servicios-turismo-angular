import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../../services/hotel.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';



interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.css']
})
export class FormHotelComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo

  constructor(private hotelService: HotelService, private router: Router) { }

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

  uploadHotel(nombre: HTMLInputElement, telefono: HTMLInputElement, link: HTMLInputElement, descripcion: HTMLTextAreaElement) {
    this.hotelService.createHotel(nombre.value, telefono.value, link.value, descripcion.value, this.file)//retorna respuesta y usamos
    //el metodo subscribe
      .subscribe(
        async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hotel registrado con exito',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
          console.log(res);
          this.router.navigate(['/hoteles']);
        },
        err => console.log(err)
      );
    return false;
  }

}
