import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import {Empresa} from '../../interfaces/Empresa';

@Component({
  selector: 'app-solicitud-afiliados',
  templateUrl: './solicitud-afiliados.component.html',
  styleUrls: ['./solicitud-afiliados.component.css']
})
export class SolicitudAfiliadosComponent implements OnInit {
  solicitudes: Empresa [] = [] ;

  constructor(private solicitutservice: EmpresaService) { }

  ngOnInit(): void {
    this.solicitud()
  }
  solicitud() {
    const id = localStorage.getItem('token');
    this.solicitutservice.getsolicitud(id).subscribe((res) => {
      this.solicitudes=res

    },err=>console.log(err));
  }
}
