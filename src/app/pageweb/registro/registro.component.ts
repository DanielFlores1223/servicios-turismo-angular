import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { CrudService } from '../../services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario={
    nombre:"",
    email:"",
    direccion:"",
    telefono:"",
    password:"",
    tipo:"admin"
  }

  constructor(private router:Router, private registroservicio:CrudService) { }

  async ngOnInit(): Promise<void> {
    await this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd)) { 
       return; 
      } 
      window.scrollTo(0, 0) 
     }); 
  }
  navegacion(){
    this.router.navigate(["/iniciosesion"]);
  }
  registro(){
   this.registroservicio.registrouser(this.usuario)
    .subscribe(async res=>{
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Con exito',
        showConfirmButton: false,
        timer: 2000
      })       
      console.log(res)
      this.router.navigate(['/iniciosesion'])
    },
    err=> Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Registro no completo, revisa tus datos',
      showConfirmButton: false,
      timer: 2000

    })       
    )
    
  }

}
