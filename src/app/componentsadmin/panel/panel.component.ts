import { Component, OnInit } from '@angular/core';
import { ConteoService } from '../../services/conteo.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private conteoservice: ConteoService) { }
  totalhoteles;
  totalusuario;
  totalrestaurant;
  totalsitios;
  totaleventos;

  ngOnInit(): void {
    this.conteohotel()
    this.conteousuario()
    this.conteorestautante()
    this.conteositio()
    this.conteoevento()
  }
  conteohotel() {
    this.conteoservice.counthoteles().subscribe(res => {
      this.totalhoteles = res;
    }, error => console.log(error))
  }
  conteousuario() {
    this.conteoservice.countusuario().subscribe(res => {
      this.totalusuario = res;
    }, error => console.log(error))
  }
  conteorestautante() {
    this.conteoservice.countrestaurante().subscribe(res => {
      this.totalrestaurant = res;
    }, error => console.log(error))
  }
  conteositio() {
    this.conteoservice.countsitios().subscribe(res => {
      this.totalsitios = res;
    }, error => console.log(error))
  } 
  conteoevento() {
    this.conteoservice.counteventos().subscribe(res => {
      this.totaleventos = res;
    }, error => console.log(error))
  }
}
