import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { Comerciante } from '../../../interfaces/Comerciante';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list-afiliados',
  templateUrl: './list-afiliados.component.html',
  styleUrls: ['./list-afiliados.component.css']
})
export class ListAfiliadosComponent implements OnInit {
  pageActual: number = 1;//paginador
  comerciantes: Comerciante[] = [];//creamos list vacia

  constructor(private router:Router,private crudService:CrudService) { 
    this.ver();
  }
  async ngOnInit(): Promise<void> {
   
  }//funciona
  ver(){
    this.crudService.verafili().subscribe((data)=>{
      this.comerciantes=data
      console.log(this.comerciantes)
    })
  }//funciona
  eliminar(numerosocio:Number){
    this.crudService.eliminarafili(numerosocio).subscribe(()=>{
      console.log("borrado");
      this.ver();
    },
    ()=>console.log("no borrado")
    )

  }
  modificar(numerosocio:Number){
    this.router.navigate(["afiliados",numerosocio]);

  }
navegacion(){
  this.router.navigate(['afiliados/new'])
}

}
