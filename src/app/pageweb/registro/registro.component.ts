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
  comerciantes;
  comerciante={
    nombre:"",
    email:"",
    direccion:"",
    telefono:"",
    password:"",
    tipo:"afiliado"
  }

  submitted = false;
  constructor(private router:Router,private crudService:CrudService) { }

  async ngOnInit() { 
  }
  navegacion(){
    this.router.navigate(["/empresa/new"]);
  }
  registro(){
    this.crudService.registrarafili(this.comerciante)
    .subscribe(async res=>{
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Con exito',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar:true  
      })       
      console.log(res)

      this.router.navigate(['/empresa/new'])
     
      
    },   
    )   
  }

}
