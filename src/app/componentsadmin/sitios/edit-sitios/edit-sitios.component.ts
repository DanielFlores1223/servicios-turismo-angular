import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { SitioService } from '../../../services/sitio.service';
import {Sitio} from '../../../interfaces/Sitio';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-sitios',
  templateUrl: './edit-sitios.component.html',
  styleUrls: ['./edit-sitios.component.css']
})
export class EditSitiosComponent implements OnInit {

  id: string;
  sitio: Sitio;
  url = Dominio.URL;
  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private activatedRoute: ActivatedRoute,private sitioService: SitioService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {//de esta ruta activa quiero estos parametros
      this.id = params['id'];//ese id va tener como valor lo que obtengo de la url
      this.sitioService.getSitio(this.id)//una vez tengo ese valor  desde sitioservice llamo al metodoget a traves del id
        .subscribe(//retorna dos cosas
          res => {
            this.sitio = res;
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

  

  updateSitio(nombresitio: HTMLInputElement, subtitulo: HTMLInputElement, descripcioncorta: HTMLInputElement, contenido1: HTMLInputElement, contenido2: HTMLInputElement): boolean {

     //validamos que los campos no esten vacios
    if (nombresitio.value !== '' && 
        subtitulo.value !== '' && 
        descripcioncorta.value !== '' && 
        contenido1.value !== '' &&
        contenido2.value !== '') {

         //actualizamos la información del sitio turistico 
         this.sitioService.updateSitio(this.sitio._id,nombresitio.value, subtitulo.value, descripcioncorta.value, contenido1.value, contenido2.value)
         .subscribe( async res => {
           await this.updateImage();

           await Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'Sitio turistico modificado con exito',
             showConfirmButton: false,
             timer: 2000
           })
         
           this.router.navigate(['/sitios'])
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
  
 async updateImage(){
    if (this.file !== undefined) {
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
        this.sitioService.updateSitioImage(this.file, this.id).subscribe(
          res => console.log(res),
          err =>{
            console.log(err);
            //error
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
