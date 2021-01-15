import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iniciarsession(){
    this.router.navigate(['loginAfiliado'])
   }
}
