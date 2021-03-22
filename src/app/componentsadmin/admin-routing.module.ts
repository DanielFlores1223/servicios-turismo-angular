import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//Guardias
import { GuaradminGuard } from '../guards/guaradmin.guard';
import{ GuarloginGuard } from '../guards/guarlogin.guard';
import {AfiliadoAdminGuard} from '../guards/afiliado-admin.guard';
import {AdministradoresAdminGuard} from '../guards/administradores-admin.guard'
import {EventosAdminGuard} from '../guards/eventos-admin.guard';
import {SitiosAdminGuard} from '../guards/sitios-admin.guard';
import {EmpresasValidadasAdminGuard} from '../guards/empresas-validadas-admin.guard';
import {SolicitudesEmpresasAdminGuard} from '../guards/solicitudes-empresas-admin.guard';
import {CarruselAdminGuard} from '../guards/carrusel-admin.guard';

//Componentes
import { EditAfiliadosComponent } from './afiliados/edit-afiliados/edit-afiliados.component';
import { FormAfiliadosComponent } from './afiliados/form-afiliados/form-afiliados.component';
import { ListAfiliadosComponent } from './afiliados/list-afiliados/list-afiliados.component';
import { FormAdminComponent } from './administradores/form-admin/form-admin.component';
import { EditAdminComponent } from './administradores/edit-admin/edit-admin.component';
import { ListAdminComponent } from './administradores/list-admin/list-admin.component';
import { EditEventsComponent } from './eventos/edit-events/edit-events.component';
import { FormEventsComponent } from './eventos/form-events/form-events.component';
import { ListEventsComponent } from './eventos/list-events/list-events.component';
import { PanelComponent } from './panel/panel.component';
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

  {path: 'afiliados', component: ListAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard,AfiliadoAdminGuard]}, 
  {path: 'afiliados/new',component: FormAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard,AfiliadoAdminGuard]},
  {path: 'afiliados/:id',component: EditAfiliadosComponent,canActivate :[GuarloginGuard,GuaradminGuard,AfiliadoAdminGuard]},
 
  {path: 'administradoresLista', component:ListAdminComponent, canActivate:[GuarloginGuard,GuaradminGuard, AdministradoresAdminGuard]},
  {path: 'administradores/new', component:FormAdminComponent, canActivate:[GuarloginGuard, GuaradminGuard, AdministradoresAdminGuard]},
  {path: 'administradores/:id', component:EditAdminComponent, canActivate:[GuarloginGuard, GuaradminGuard, AdministradoresAdminGuard]},

  {path: 'eventos', component: ListEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard, EventosAdminGuard]}, 
  {path: 'eventos/new',component: FormEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard, EventosAdminGuard]},
  {path: 'eventos/:id',component: EditEventsComponent,canActivate :[GuarloginGuard, GuaradminGuard, EventosAdminGuard]},

  {path: 'sitios', component: ListSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard, SitiosAdminGuard]}, 
  {path: 'sitios/new',component: FormSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard, SitiosAdminGuard]},
  {path: 'sitios/:id',component: EditSitiosComponent,canActivate :[GuarloginGuard, GuaradminGuard, SitiosAdminGuard]},

  {path: 'empresas', component: ListEmpresasComponent,canActivate :[GuarloginGuard, GuaradminGuard, SolicitudesEmpresasAdminGuard]}, 
  {path : 'empresas-validadas', component: EmpresasGeneralComponent, canActivate :[GuarloginGuard, GuaradminGuard, EmpresasValidadasAdminGuard]} ,
  {path: 'empresas-validadas/new', component: FormEmpresasComponent, canActivate :[GuarloginGuard, GuaradminGuard, EmpresasValidadasAdminGuard]},
  {path: 'empresas-validadas/:id', component: EditEmpresasAdminComponent, canActivate :[GuarloginGuard, GuaradminGuard, EmpresasValidadasAdminGuard]},
  

  {path: 'carrusel', component: ListPhotosCarruselComponent, canActivate: [GuarloginGuard, GuaradminGuard, CarruselAdminGuard]},
  {path: 'carrusel/new-photo', component: FormPhotosCarruselComponent, canActivate: [GuarloginGuard, GuaradminGuard, CarruselAdminGuard]},

  {path:'',redirectTo:'panel', pathMatch:'full',canActivate: [GuarloginGuard, GuaradminGuard]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
