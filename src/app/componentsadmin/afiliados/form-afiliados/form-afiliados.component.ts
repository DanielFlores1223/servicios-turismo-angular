import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../services/crud.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-afiliados',
  templateUrl: './form-afiliados.component.html',
  styleUrls: ['./form-afiliados.component.css']
})
export class FormAfiliadosComponent implements OnInit {
  comerciantes;
  comerciante={
    nombre:"",
    email:"",
    numerosocio:"",
    password:"",
    tipo:"afiliado"
  }
  
  submitted = false;
  constructor(private router:Router,private crudService:CrudService) { }
  

  ngOnInit(): void {

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

      this.router.navigate(['/afiliados'])
     
      
    },   
    )   
  }

}
