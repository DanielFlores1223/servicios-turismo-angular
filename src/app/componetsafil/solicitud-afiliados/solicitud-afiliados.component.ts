import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa, EmpresaObj } from '../../interfaces/Empresa';
import { Dominio } from '../../interfaces/Dominio';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}

@Component({
  selector: 'app-solicitud-afiliados',
  templateUrl: './solicitud-afiliados.component.html',
  styleUrls: ['./solicitud-afiliados.component.css']
})
export class SolicitudAfiliadosComponent implements OnInit {

  solicitudes: Empresa[] = [];
  nuevoestatus = "";
  solicitudEditar: Empresa;
  photoSelected: string | ArrayBuffer;
  file: File;
  url = Dominio.URL;
  idEditar: String;

  constructor(private solicitutservice: EmpresaService, private router: Router) { }

  ngOnInit(): void {
    this.solicitud()
  }

  onPhotoSelected(event: HtmlInputEvent): void {//recibe un objeto de tipo event
    if (event.target.files && event.target.files[0]) {//si exsiste la propiedad files y que exista un file subido
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();//que utlice el objeto del navegador filereader para leer un archivo
      reader.onload = e => this.photoSelected = reader.result;//una vez leido el archivo
      reader.readAsDataURL(this.file);
    }
  }

  solicitud() {
    const id = localStorage.getItem('token');
    this.solicitutservice.getsolicitud(id).subscribe((res) => {
      this.solicitudes = res

    }, err => console.log(err));
  }

  //acciones
  cancelarsolicitud(estatus, id) {
    this.solicitutservice.updateEstatus(estatus, id).subscribe(res => {
      let mensaje = '';
      if(estatus=="Cancelado por el afiliado"){
         mensaje = 'La solicitud se ha cancelado correctamente'
      }else {
        mensaje = 'La solicitud se ha enviado al administrador nuevamente'
      }
     
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000
      });
      this.solicitud();
    },
      err => console.log(err));

  }

  consultarSolicitud(id: String) {

    this.idEditar = id;
    //obtenemos la informacion de la solicitud a editar
    this.solicitutservice.getEmpresa(id).subscribe(
      res => this.solicitudEditar = res,
      err => console.log(err));

  }


  editarsolicitud() {
    if (this.solicitudEditar.nombreEmpresa !== '' &&
      this.solicitudEditar.giro !== '' &&
      this.solicitudEditar.telefono !== '' &&
      this.solicitudEditar.paginaWeb !== '' &&
      this.solicitudEditar.descripcion !== ''){

      this.solicitutservice.updateEmpresa(this.solicitudEditar, this.idEditar).subscribe(async res => {
        await this.updateImage();
        //Cambia el estatus a pendiente una vez que el afiliado actualiza la información.
        await this.cancelarsolicitud('Pendiente', this.idEditar);
        this.router.navigate(['/mis/solicitudes'])
        this.solicitud();
      });

    } else {
      //algun campo esta vacio
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Revise que los campos obligatorios esten llenos',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    }

  }


  async updateImage() {
    //validar imagen
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
          timerProgressBar: true
        });

      } else {
        this.solicitutservice.updateEmpresaImage(this.file, this.idEditar).subscribe(
          res => true,
          err => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Hubó un error al intentar subir la imagen',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true
            });
          });
      }
    }
  }

}

