import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa, EmpresaObj } from '../../../interfaces/Empresa';


@Component({
  selector: 'app-edit-empresas-admin',
  templateUrl: './edit-empresas-admin.component.html',
  styleUrls: ['./edit-empresas-admin.component.css']
})
export class EditEmpresasAdminComponent implements OnInit {
  empresaInfo: Empresa;
  url = Dominio.URL;
  id = this.activatedRoute.snapshot.params.id;

  constructor(private empresaService: EmpresaService, private ruta: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(){
    this.empresaService.getEmpresa(this.id).subscribe(res => this.empresaInfo = res, err => {

    })
  }

  updateEmpresa(){

    if (this.validarCamposObligatorios()) {
      this.empresaService.updateEmpresa(this.empresaInfo, this.id).subscribe(async res => {
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

    }/*else{
      //PENDIENTE!!!!!
      //validamos que el tipo file sea una imagen
      //8const tipoImagen = this.file.type.split('/');
  
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
      }*/else{
        return true;
      }
      
    } 
}

  


