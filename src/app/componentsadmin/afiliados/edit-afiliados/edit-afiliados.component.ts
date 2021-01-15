import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { Comerciante } from '../../../interfaces/Comerciante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-afiliados',
  templateUrl: './edit-afiliados.component.html',
  styleUrls: ['./edit-afiliados.component.css']
})
export class EditAfiliadosComponent implements OnInit {

  constructor(private router:Router,private registroservicio:CrudService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((data)=>{
      this.consultar(data['numerosocio']);
    })
   }
  comerciante:Comerciante={
    _id:" ",
    nombre:" ",
    email:" ",
    numerosocio:0,
    password:" ",
    tipo:" ",
  }
  
  ngOnInit(): void {
  }
 
  add(){
    this.activatedRoute.params.subscribe((data)=>{
      this.modificar(data['numerosocio'])
    })
  }
  
  consultar(numerosocio:Number){
    this.registroservicio.consultarafili(numerosocio).subscribe((data)=>{
      this.comerciante=data;
    })

    
  }
  modificar(numerosocio:Number){
    this.registroservicio.modificarafili(numerosocio,this.comerciante)
    .subscribe(async res=>{
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'modificación Con exito',
        showConfirmButton: false,
        timer: 2000
      })       
      console.log(res)
      
      this.router.navigate(['/afiliados'])
      
    },
    err=> Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Modificacion no completa, revisa tus datos',
      showConfirmButton: false,
      timer: 2000
    })       
    ) 
  }

}
