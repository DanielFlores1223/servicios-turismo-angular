import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../services/empresa.service';
import {EmpresaObj} from '../../../interfaces/Empresa';
import {UsuarioService} from '../../../services/usuario.service'
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

interface HtmlInputEvent extends Event {//se crea interfaz para extener event
  target: HTMLInputElement & EventTarget;//tiene una propiedad y va a utlizar  htmlunput
}


@Component({
  selector: 'app-form-empresas',
  templateUrl: './form-empresas.component.html',
  styleUrls: ['./form-empresas.component.css']
})
export class FormEmpresasComponent implements OnInit {
  //variables
  photoSelected: string | ArrayBuffer;
  file: File;
  solicitudEmpresa = EmpresaObj;
  entrar: boolean;

  constructor(private empresaService: EmpresaService, private router: Router, private usuarioService: UsuarioService) { }

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

  validarId(){
    //verificamos que el id del localStorage no se haya modificado manualmente
    const id = localStorage.getItem('token');
     this.usuarioService.getUsuarioId(id).subscribe(res => {
       //una vez verificado el usuario, se envia la solicitud
       this.enviarSolicitudEmpresa();
     }, err => {
      //en caso de no encontrarlo se manda una alerta y cierra sesion
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Inicie sesión de nuevo, se detectó un error',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar:true  
      });

      //cerramos sesion
      localStorage.clear();
      this.entrar = this.usuarioService.loginExito();
      this.router.navigate(['/paginaprincipal'])
  
    });
    
  }

  enviarSolicitudEmpresa(){
    //obtenemos el id del comerciante
    this.solicitudEmpresa.idComerciante = localStorage.getItem('token');
    this.solicitudEmpresa.estatus = 'Validado';
    
    if (this.validarCamposObligatorios()) {
      this.empresaService.createEmpresa(this.solicitudEmpresa, this.file).subscribe(
        async res => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La Empresa se rigistró y se público correctamente.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar:true  
          });
          
          this.limpiarFormulario();
          this.router.navigate(['/empresas-validadas']);
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
        }
      );
      
      return false;
    }
  }

  validarCamposObligatorios(){

    if ( this.solicitudEmpresa.descripcion === '' || 
         this.solicitudEmpresa.giro === '' || 
         this.solicitudEmpresa.nombreEmpresa === ''  || 
         this.solicitudEmpresa.telefono === '' || 
         this.solicitudEmpresa.idComerciante === '' || 
         this.file === undefined ) {
  
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

      //validamos que el tipo file sea una imagen
      const tipoImagen = this.file.type.split('/');
  
      if (tipoImagen[0] !== 'image') {
        //en caso de que sea diferente de image se muestra una alerta
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El Formato de imagen que intentó subir no se permite.',
          text: 'Intente con una imagen en formato .png/.jpg',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar:true  
        });
        return false;
      }else{
        return true;
      }
      
    } 
  }


  limpiarFormulario(){
    this.solicitudEmpresa.descripcion = '';
    this.solicitudEmpresa.estatus = '';
    this.solicitudEmpresa.facebook = '';
    this.solicitudEmpresa.giro = '';
    this.solicitudEmpresa.idComerciante = '';
    this.solicitudEmpresa.nombreEmpresa = '';
    this.solicitudEmpresa.paginaWeb = '';
    this.solicitudEmpresa.telefono = '';
    this.solicitudEmpresa.twitter = '';
    this.file = undefined;
  }

}
