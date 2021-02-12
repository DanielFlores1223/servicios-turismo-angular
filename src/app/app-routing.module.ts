import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './componentsadmin/photo-list/photo-list.component'
import { PhotoFormComponent } from './componentsadmin/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './componentsadmin/photo-preview/photo-preview.component'
import { GuarpageWebGuard } from './guards/guarpage-web.guard'
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
import { ComerciosComponent } from './pageweb/comercios/comercios.component'


const routes: Routes = [//definimos la rutas para el enrutador

  {path:'hotels',component:HotelesComponent, canActivate: [GuarpageWebGuard]},
  {path:'rutascamion',component:RutasCamionComponent, canActivate: [GuarpageWebGuard]},
  {path:'lugares',component:LugaresComponent, canActivate: [GuarpageWebGuard]},
  {path:'catedral',component:CatedralComponent, canActivate: [GuarpageWebGuard]},
  {path:'teatro',component:TeatroComponent, canActivate: [GuarpageWebGuard]},
  {path:'rotonda',component:RotondaComponent, canActivate: [GuarpageWebGuard]},
  {path:'sanjuan',component:SanjuanComponent, canActivate: [GuarpageWebGuard]},
  {path:'centroH',component:CentrohistoricoComponent, canActivate: [GuarpageWebGuard]},
  {path: 'comercios', component: ComerciosComponent, canActivate: [GuarpageWebGuard]},
  
  
  {path:'menu',component:MenuComponent, canActivate: [GuarpageWebGuard]},
  {path:'iniciosesion',component:IniciosesionComponent, canActivate: [GuarpageWebGuard]},
  {path:'paginaprincipal',component:PaginaPrincipalComponent, canActivate: [GuarpageWebGuard]},
  {path:'pie',component:PiePaginaComponent, canActivate: [GuarpageWebGuard]},
  {path:'restaurant',component:RestaurantesComponent, canActivate: [GuarpageWebGuard]},
  {path:'pagNoFound',component:PagNofoundComponent, canActivate: [GuarpageWebGuard]},
  {path:'massitios',component:MasSitiosComponent, canActivate: [GuarpageWebGuard]},
  {path:'registro', component:RegistroComponent, canActivate: [GuarpageWebGuard]},
  {path:'loginAfiliado', component:LoginAfiliadoComponent, canActivate: [GuarpageWebGuard]},
  {path: 'even', component:EventosComponent, canActivate: [GuarpageWebGuard]},

  {path:'',redirectTo:'paginaprincipal', pathMatch:'full'},
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
