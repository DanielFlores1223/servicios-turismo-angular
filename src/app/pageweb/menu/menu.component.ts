import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  esDispositivoMovil = () => window.innerWidth <= 800;
  ngOnInit(): void {

  }

  desplegar(grid: HTMLDivElement) {
    if (!this.esDispositivoMovil()) {
      grid.classList.add('activo');
    }

  }

  cerrarMenu(grid: HTMLDivElement) {
    if (!this.esDispositivoMovil())
      grid.classList.remove('activo');
  }


  desplegarSubcategorias(evento) {

    if (evento.target.classList.contains('categoria-select') && !this.esDispositivoMovil()) {

      document.querySelectorAll('#menu .subcategoria').forEach((categoria: HTMLDivElement) => {
        categoria.classList.remove('activo');
        if (categoria.dataset.categoria == evento.target.dataset.categoria) {
          categoria.classList.add('activo');
        }
      });

    }

  }

  desplegarMenuResponsive(evento) {
    const contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav');
    evento.preventDefault();
    if (contenedorEnlacesNav.classList.contains('activo')) {
      contenedorEnlacesNav.classList.remove('activo');
      document.querySelector('body').style.overflow = 'visible';
    } else {
      contenedorEnlacesNav.classList.add('activo');
      document.querySelector('body').style.overflow = 'hidden';
    }
  }

  cerrarMenuAlNavegar(evento){
    if(this.esDispositivoMovil() && evento.target.classList.contains('cerrar-direccionar')){
      const contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav');
      evento.preventDefault();
      if (contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
      } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
      }
    }
  }

  desplegarDepartamentosResponsive(evento, grid: HTMLDivElement) {
    const btnCerrarMenu = document.getElementById('btn-menu-cerrar');
    if (this.esDispositivoMovil()) {
      grid.classList.add('activo');
      btnCerrarMenu.classList.add('activo');
    }

  }

  regresarResponsive(evento, grid: HTMLDivElement) {
    const btnCerrarMenu = document.getElementById('btn-menu-cerrar');
    evento.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
  }


  desplegarSubcategoriasResponsive(evento, contenedor: HTMLDivElement) {
    evento.preventDefault();
    
    if (evento.target.classList.contains('categoria-select') && this.esDispositivoMovil()) {
      contenedor.classList.add('activo');
      document.querySelectorAll('#menu .subcategoria').forEach((categoria: HTMLDivElement) => {
        categoria.classList.remove('activo');
        if (categoria.dataset.categoria == evento.target.dataset.categoria) {
          categoria.classList.add('activo');
        }
      });

    }
  }

  regresarResponsiveCategorias(evento, contenedorSub){
    evento.preventDefault();
    contenedorSub.classList.remove('activo');
  }

  cerrarMenuResponsive(evento){
    evento.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
      elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
  }


}