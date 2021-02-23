import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../interfaces/Empresa';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Dominio} from '../../../interfaces/Dominio';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  empresas: Empresa[] = [];
  empresaInfo: Empresa;
  pageActual = 1;
  opcionSeleccionado = 'Todos';
  url = Dominio.URL;
  idActual = '';
  
  constructor(private empresaService: EmpresaService, private ruta: Router) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  changeId(id){
    this.idActual = id;
  }

  getEmpresas(){
    this.empresaService.getEmpresas().subscribe(
        res => this.empresas = res,
        err => console.log(err)
      );
  }

  getEstatusEmpresas(){
     this.empresaService.getEstatusEmpresa(this.opcionSeleccionado).subscribe(
       res => this.empresas = res,
       err => console.log(err)
     );
  }

  getEmpresa(id){
    this.empresaService.getEmpresa(id).subscribe(
      res => this.empresaInfo = res,
      error => console.log(error)
    );
  }

  updateEstatus(estatus, id){
    this.empresaService.updateEstatus(estatus, id).subscribe(
    res => {
      let mensaje = '';
      switch (estatus) {
        case 'Validado':
            mensaje = 'La solicitud se valido correctamente'
          break;  
      
        case 'Cancelado':
          mensaje = 'La solicitud se ha cancelado correctamente'
          break;
      }

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000
      });

      this.getEstatusEmpresas();
    },
    err => console.log(err));
  }

  async cancelSolicitud(observaciones: HTMLTextAreaElement){   
    await this.empresaService.updateObservaciones(observaciones.value, this.idActual).subscribe(res => true,
    err => false);

    await this.updateEstatus('Cancelado', this.idActual);

    observaciones.value = '';
    this.idActual = '';
  }

//Este metodo muestra la alerta de confirmación para eliminar la solicitud
//Támbien aqui se ejecuta la función: deleteSolicitud()
  showConfirmacion(id: string){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar esta solicitud?',
      text: "Una vez eliminada, la información no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //revisamos si la solicitud se elimino correctamente
        if(this.deleteSolicitud(id)){
          //mostramos la alerta de success
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'La solicitud se eliminó correctamente.',
            'success'
          );

          this.getEstatusEmpresas();
          this.ruta.navigate(['/empresas']);
        }
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'La solicitud NO se borró :)',
          'error'
        )
      }
    })
  }

  deleteSolicitud(id: string): Boolean{
   const eliminado =  this.empresaService.deleteEmpresaSolicitud(id).subscribe(
      res => true,
      err => false);

      if (eliminado) 
        return true;
      else
        return false;
  }

}
