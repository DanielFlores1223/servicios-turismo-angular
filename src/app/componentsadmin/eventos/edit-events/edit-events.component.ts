import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { EventoService } from '../../../services/evento.service';
import {Evento} from '../../../interfaces/Evento';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  id: string;
  evento: Evento;
  url = Dominio.URL;
  date = new Date;
  yearActual;
  file: File;
  photoSelected: string | ArrayBuffer;


  constructor(private activatedRoute: ActivatedRoute,private eventoService: EventoService,private router: Router) { }

  ngOnInit(): void {
    this.yearActual = this.date.getFullYear();

    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.eventoService.getEvento(this.id)//una vez tengo ese valor  desde eventoservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.evento = res;
          },
          err => console.log(err)
        )
    });
  }


  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  updateEvento(nombreEvento: HTMLInputElement, direccion: HTMLInputElement, fecha_inicio: HTMLInputElement, fecha_fin: HTMLInputElement, descripcion: HTMLInputElement): boolean {

    //validamos que los campos no esten vacios
    if (nombreEvento.value !== '' && 
        direccion.value !== '' && 
        fecha_inicio.value !== '' && 
        fecha_fin.value !== '' && 
        descripcion.value !== '' ) {

      //actualizamos informacion del evento
      this.eventoService.updateEvento(this.evento._id,nombreEvento.value, direccion.value, fecha_inicio.value, fecha_fin.value, descripcion.value)
      .subscribe( async res => {

        await this.updateImage();

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Evento modificado con exito',
          showConfirmButton: false,
          timer: 2000
        })
      
        this.router.navigate(['/eventos'])
      },
      error => {
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
    
    return false;//returna un false para cancel el event
  }

  async updateImage(){
    //revisamos si se intento subir una nueva imagen
    if (this.file !== undefined) {
      //validamos que el tipo file sea una imagen
      const tipoImagen = this.file.type.split('/');
      if (tipoImagen[0] !== 'image') {
        //en caso de que sea diferente de image se muestra una alerta
        await Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al intentar subir la imagen.',
          text: 'El Formato de imagen que intentó subir no se permite, Intente con una imagen en formato .png/.jpg',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
      }else{
        //si pasa la validación del formato de imagen, realizamos la peticion
        this.eventoService.updateEventoImage(this.file, this.id).subscribe(
          () => true,
          () => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Hubó un error al intentar subir la imagen',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar:true  
            });
          })
      }
    }
  }

}
