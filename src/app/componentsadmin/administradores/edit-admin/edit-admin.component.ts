import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminCrudService } from '../../../services/admin-crud.service';
import { Administradores } from '../../../interfaces/Administradores';
import { Comerciante } from '../../../interfaces/Comerciante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  constructor(private router:Router,private registroAdminservicio:AdminCrudService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((data)=>{
      this.consultarAdmin(data[':id']);
    })
   }
   administrador:Administradores={
    _id:" ",
    nombre:" ",
    email:" ",
    direccion:"",
    telefono:"",
    password:" ",
    tipo:" ",
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id)
    this.consultarAdmin(this.activatedRoute.snapshot.params.id)
  }
  add(){
    this.activatedRoute.params.subscribe((data)=>{
      this.modificarAdmin(data[':id'])
    })
  }
  
  consultarAdmin(id:String){
    this.registroAdminservicio.consultarAdmin(id).subscribe((data)=>{
      this.administrador=data;
      console.log(data)
    })

    
  }
    modificarAdmin(id:String){
      this.registroAdminservicio.modificarAdmin(id,this.administrador)
      .subscribe(async res=>{
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Modificación con éxito',
          showConfirmButton: false,
          timer: 2000
        })       
        console.log(res)
        
        this.router.navigate(['/administradores'])
        
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

