import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './componentsadmin/photo-list/photo-list.component'
import { PhotoFormComponent } from './componentsadmin/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './componentsadmin/photo-preview/photo-preview.component'

import { CatedralComponent } from './pageweb/catedral/catedral.component';
import { CentrohistoricoComponent } from './pageweb/centrohistorico/centrohistorico.component';
import { HotelesComponent } from './pageweb/hoteles/hoteles.component';
import { IniciosesionComponent } from './pageweb/iniciosesion/iniciosesion.component';
import { LugaresComponent } from './pageweb/lugares/lugares.component';
import { MenuComponent } from './pageweb/menu/menu.component';
import { PaginaPrincipalComponent } from './pageweb/pagina-principal/pagina-principal.component';
import { PiePaginaComponent } from './pageweb/pie-pagina/pie-pagina.component';
import { RestaurantesComponent } from './pageweb/restaurantes/restaurantes.component';
import { RotondaComponent } from './pageweb/rotonda/rotonda.component';
import { RutasCamionComponent } from './pageweb/rutas-camion/rutas-camion.component';
import { SanjuanComponent } from './pageweb/sanjuan/sanjuan.component';
import { TeatroComponent } from './pageweb/teatro/teatro.component';
import { PagNofoundComponent } from './pageweb/pag-nofound/pag-nofound.component';
import { MasSitiosComponent } from './pageweb/mas-sitios/mas-sitios.component';
import { RegistroComponent } from './pageweb/registro/registro.component';
import { LoginAfiliadoComponent } from './pageweb/login-afiliado/login-afiliado.component';
import { EventosComponent } from './pageweb/eventos/eventos.component';





const routes: Routes = [//definimos la rutas para el enrutador

  {path:'hotels',component:HotelesComponent},
  {path:'rutascamion',component:RutasCamionComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'catedral',component:CatedralComponent},
  {path:'teatro',component:TeatroComponent},
  {path:'rotonda',component:RotondaComponent},
  {path:'sanjuan',component:SanjuanComponent},
  {path:'centroH',component:CentrohistoricoComponent},
  
  
  {path:'menu',component:MenuComponent},
  {path:'iniciosesion',component:IniciosesionComponent},
  {path:'paginaprincipal',component:PaginaPrincipalComponent},
  {path:'pie',component:PiePaginaComponent},
  {path:'restaurant',component:RestaurantesComponent},
  {path:'pagNoFound',component:PagNofoundComponent},
  {path:'massitios',component:MasSitiosComponent},
  {path:'registro', component:RegistroComponent},
  {path:'loginAfiliado', component:LoginAfiliadoComponent},
  {path: 'even', component:EventosComponent},
  
  

  {path:'',redirectTo:'paginaprincipal', pathMatch:'full' },
  {path:'**',redirectTo:'pagNoFound', pathMatch:'full'}

/*cuando yo vicite esta ruta renderizame este componente
  {path: 'photos', component: PhotoListComponent}, 
  {path: 'photos/new',component: PhotoFormComponent},
  {path: 'photos/:id',component: PhotoPreviewComponent}
  /*{path: '', redirectTo: '/photos', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
