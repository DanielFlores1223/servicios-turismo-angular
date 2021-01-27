import { Component, OnInit } from '@angular/core';
import { AdminCrudService } from '../../../services/admin-crud.service';
import { Administradores } from '../../../interfaces/Administradores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  pageActual: number = 1;//paginador
  admin: Administradores[] = [];//creamos list vacia

  constructor(private router:Router,private crudService:AdminCrudService) { 
    this.ver();
  }

  ngOnInit() {
  }

  ver(){
    this.crudService.veradministrador().subscribe((data)=>{
      this.admin=data
      console.log(this.admin)
    })
  }//funciona

  eliminaradministrador(id:String){
    const elimina={
      id: id

    }
    this.crudService.eliminaradministrador(elimina).subscribe(()=>{
      console.log("borrado");
      this.ver();
    },
    ()=>console.log("no borrado")
    )
  }
  modificaradministrador(tipo:String){
    this.router.navigate(["administradores",tipo]);

  }
  navegacion(){
    this.router.navigate(['administradores/new'])
  }
}
