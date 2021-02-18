import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa, EmpresaObj } from '../../../interfaces/Empresa';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-empresas-admin',
  templateUrl: './edit-empresas-admin.component.html',
  styleUrls: ['./edit-empresas-admin.component.css']
})
export class EditEmpresasAdminComponent implements OnInit {
  empresaInfo: Empresa;
  url = Dominio.URL;
  id = this.activatedRoute.snapshot.params.id;
  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private empresaService: EmpresaService, private ruta: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmpresa();
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


  getEmpresa(){
    this.empresaService.getEmpresa(this.id).subscribe(res => this.empresaInfo = res, err => {

    })
  }

  updateEmpresa(){

    if (this.validarCamposObligatorios()) {
      this.empresaService.updateEmpresa(this.empresaInfo, this.id).subscribe(async res => {
        //primero revisamos si se necesita actualizar la imagen
        await this.updateImage();

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La información se modificó correctamente.',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar:true  
        });

        this.ruta.navigate(['/empresas-validadas']);
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
      })
    }
    
  }

 async updateImage(){
    if (this.file != undefined) {
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
        //si es una imagen entonces hacemos la petición
        this.empresaService.updateEmpresaImage(this.file, this.id).subscribe(
          res => true,
          err => {
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

  validarCamposObligatorios(){
  //falta validar la img
    if ( this.empresaInfo.descripcion === '' || 
         this.empresaInfo.giro === '' || 
         this.empresaInfo.nombreEmpresa === ''  || 
         this.empresaInfo.telefono === '' ) {
  
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
}

  


