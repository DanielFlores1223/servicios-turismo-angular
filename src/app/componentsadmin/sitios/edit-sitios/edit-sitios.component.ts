import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//activaterute o ruta seleccionada me proporciona informacion de la url
import { SitioService } from '../../../services/sitio.service';
import {Sitio} from '../../../interfaces/Sitio';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-sitios',
  templateUrl: './edit-sitios.component.html',
  styleUrls: ['./edit-sitios.component.css']
})
export class EditSitiosComponent implements OnInit {

  id: string;
  sitio: Sitio;

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

  deleteSitio(id: string) {
    this.sitioService.deleteSitio(id)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sitio turistico eliminado',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res)
        this.router.navigate(['/sitios']);
      })
  }

  updateSitio(nombresitio: HTMLInputElement, subtitulo: HTMLInputElement, descripcioncorta: HTMLInputElement, contenido1: HTMLInputElement, contenido2: HTMLInputElement): boolean {
    this.sitioService.updateSitio(this.sitio._id,nombresitio.value, subtitulo.value, descripcioncorta.value, contenido1.value, contenido2.value)
      .subscribe( async res => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sitio turistico modificado con exito',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(res);
        this.router.navigate(['/sitios'])
      },
      error => console.log(error)
      )
    return false;//return un false para cancel el event
  }
  

}
