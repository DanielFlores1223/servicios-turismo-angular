import { Component, OnInit } from '@angular/core';
import {RestauranteService} from '../../../services/restaurante.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.css']
})
export class FormRestaurantComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo

  constructor(private restauranteService: RestauranteService, private router: Router) { }

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

  uploadRestaurante(nombreRes: HTMLInputElement, descripcion: HTMLTextAreaElement, direccion: HTMLInputElement, link: HTMLInputElement) {
    this.restauranteService.createRestaurante(nombreRes.value, descripcion.value, direccion.value, link.value, this.file)//retorna respuesta y usamos
    //el metodo subscribe
      .subscribe(
        async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Restaurante registrado con exito',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true  
          })
          console.log(res);
          this.router.navigate(['/restaurantes']);
        },
        err => console.log(err)
      );
    return false;
  }

}
