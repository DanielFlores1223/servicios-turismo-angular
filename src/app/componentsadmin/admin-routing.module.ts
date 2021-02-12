import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { GuaradminGuard } from '../guards/guaradmin.guard';
import{ GuarloginGuard } from '../guards/guarlogin.guard';


import { EditAfiliadosComponent } from './afiliados/edit-afiliados/edit-afiliados.component';
import { FormAfiliadosComponent } from './afiliados/form-afiliados/form-afiliados.component';
import { ListAfiliadosComponent } from './afiliados/list-afiliados/list-afiliados.component';
import { FormAdminComponent } from './administradores/form-admin/form-admin.component';
import { EditAdminComponent } from './administradores/edit-admin/edit-admin.component';
import { ListAdminComponent } from './administradores/list-admin/list-admin.component';
import { ContDashboardComponent } from './cont-dashboard/cont-dashboard.component';
import { EditEventsComponent } from './eventos/edit-events/edit-events.component';
import { FormEventsComponent } from './eventos/form-events/form-events.component';
import { ListEventsComponent } from './eventos/list-events/list-events.component';
import { EditHotelComponent } from './hotel/edit-hotel/edit-hotel.component';
import { FormHotelComponent } from './hotel/form-hotel/form-hotel.component';
import { ListHotelComponent } from './hotel/list-hotel/list-hotel.component';
import { PanelComponent } from './panel/panel.component';
import { EditRestaurantComponent } from './restaurant/edit-restaurant/edit-restaurant.component';
import { FormRestaurantComponent } from './restaurant/form-restaurant/form-restaurant.component';
import { ListRestaurantComponent } from './restaurant/list-restaurant/list-restaurant.component';
import { EditSitiosComponent } from './sitios/edit-sitios/edit-sitios.component';
import { FormSitiosComponent } from './sitios/form-sitios/form-sitios.component';
import { ListSitiosComponent } from './sitios/list-sitios/list-sitios.component';
import { ListEmpresasComponent } from './solicitudes/list-empresas/list-empresas.component';
import {ListPhotosCarruselComponent} from './configuracion-pagina/list-photos-carrusel/list-photos-carrusel.component';
import {FormPhotosCarruselComponent} from './configuracion-pagina/form-photos-carrusel/form-photos-carrusel.component';
import {EmpresasGeneralComponent} from './empresas/empresas-general/empresas-general.component';
import { FormEmpresasComponent } from './empresas/form-empresas/form-empresas.component';
import { EditEmpresasAdminComponent } from './empresas/edit-empresas-admin/edit-empresas-admin.component';

const routes: Routes = [

 

 
  {path: 'panel',component: PanelComponent,canActivate :[GuarloginGuard, GuaradminGuard]},

  {path: 'afiliados', component: ListAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard]}, 
  {path: 'afiliados/new',component: FormAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard]},
  {path: 'afiliados/:id',component: EditAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard]},
 

  
  {path: 'administradoresLista', component:ListAdminComponent, canActivate:[GuarloginGuard,GuaradminGuard]},
  {path: 'administradores/new', component:FormAdminComponent, canActivate:[GuarloginGuard, GuaradminGuard]},
  {path: 'administradores/:id', component:EditAdminComponent, canActivate:[GuarloginGuard, GuaradminGuard]},

  {path: 'eventos', component: ListEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard]}, 
  {path: 'eventos/new',component: FormEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard]},
  {path: 'eventos/:id',component: EditEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard]},

  {path: 'hoteles', component: ListHotelComponent,canActivate :[GuarloginGuard, GuaradminGuard]}, 
  {path: 'hoteles/new',component: FormHotelComponent,canActivate :[GuarloginGuard, GuaradminGuard]},
  {path: 'hoteles/:id',component: EditHotelComponent,canActivate :[GuarloginGuard, GuaradminGuard]},

  {path: 'restaurantes', component: ListRestaurantComponent,canActivate :[GuarloginGuard, GuaradminGuard]}, 
  {path: 'restaurantes/new',component: FormRestaurantComponent,canActivate :[GuarloginGuard, GuaradminGuard]},
  {path: 'restaurantes/:id',component: EditRestaurantComponent,canActivate :[GuarloginGuard, GuaradminGuard]},

  {path: 'sitios', component: ListSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard]}, 
  {path: 'sitios/new',component: FormSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard]},
  {path: 'sitios/:id',component: EditSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard]},

  {path: 'empresas', component: ListEmpresasComponent,canActivate :[GuarloginGuard, GuaradminGuard]}, 
  {path : 'empresas-validadas', component: EmpresasGeneralComponent, canActivate :[GuarloginGuard, GuaradminGuard]} ,
  {path: 'empresas-validadas/new', component: FormEmpresasComponent, canActivate :[GuarloginGuard, GuaradminGuard]},
  {path: 'empresas-validadas/:id', component: EditEmpresasAdminComponent, canActivate :[GuarloginGuard, GuaradminGuard]},
  

  {path: 'carrusel', component: ListPhotosCarruselComponent, canActivate: [GuarloginGuard, GuaradminGuard]},
  {path: 'carrusel/new-photo', component: FormPhotosCarruselComponent, canActivate: [GuarloginGuard, GuaradminGuard]},

  {path:'',redirectTo:'panel', pathMatch:'full',canActivate: [GuarloginGuard, GuaradminGuard]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
