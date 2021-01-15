import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Router} from '@angular/router';



interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoSelected: string | ArrayBuffer;//propiedad selected
  file: File;//propiedad para que guarde el archivo


  constructor(private photoService: PhotoService, private router: Router) { }

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

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.photoService.createPhoto(title.value, description.value, this.file)//retorna respuesta y usamos
    //el metodo subscribe
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/photos']);
        },
        err => console.log(err)
      );
    return false;
  }

}
