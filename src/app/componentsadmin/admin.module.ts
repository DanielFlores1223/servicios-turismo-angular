import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditAfiliadosComponent } from './afiliados/edit-afiliados/edit-afiliados.component';
import { FormAfiliadosComponent } from './afiliados/form-afiliados/form-afiliados.component';
import { ListAfiliadosComponent } from './afiliados/list-afiliados/list-afiliados.component';
import { ContDashboardComponent } from './cont-dashboard/cont-dashboard.component';
import { EditEventsComponent } from './eventos/edit-events/edit-events.component';
import { FormEventsComponent } from './eventos/form-events/form-events.component';
import { ListEventsComponent } from './eventos/list-events/list-events.component';
import { PanelComponent } from './panel/panel.component';
import { EditSitiosComponent } from './sitios/edit-sitios/edit-sitios.component';
import { FormSitiosComponent } from './sitios/form-sitios/form-sitios.component';
import { ListSitiosComponent } from './sitios/list-sitios/list-sitios.component';

import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ListEmpresasComponent } from './solicitudes/list-empresas/list-empresas.component';
import { ListPhotosCarruselComponent } from './configuracion-pagina/list-photos-carrusel/list-photos-carrusel.component';
import { FormPhotosCarruselComponent } from './configuracion-pagina/form-photos-carrusel/form-photos-carrusel.component';
import { FormEmpresasComponent } from './empresas/form-empresas/form-empresas.component';
import { EmpresasGeneralComponent } from './empresas/empresas-general/empresas-general.component';
import { EditEmpresasAdminComponent } from './empresas/edit-empresas-admin/edit-empresas-admin.component';


@NgModule({
  declarations: [
    EditAfiliadosComponent, 
    FormAfiliadosComponent, 
    ListAfiliadosComponent, 
    ContDashboardComponent, 
    EditEventsComponent, 
    FormEventsComponent, 
    ListEventsComponent,  
    PanelComponent, 
    EditSitiosComponent, 
    FormSitiosComponent, 
    ListSitiosComponent, ListEmpresasComponent, ListPhotosCarruselComponent, FormPhotosCarruselComponent, FormEmpresasComponent, EmpresasGeneralComponent, EditEmpresasAdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  exports: [ContDashboardComponent]

})

export class AdminModule { }
