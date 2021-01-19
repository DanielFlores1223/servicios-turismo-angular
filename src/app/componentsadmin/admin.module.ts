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

import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ListEmpresasComponent } from './solicitudes/list-empresas/list-empresas.component';
import { ListPhotosCarruselComponent } from './configuracion-pagina/list-photos-carrusel/list-photos-carrusel.component';
import { FormPhotosCarruselComponent } from './configuracion-pagina/form-photos-carrusel/form-photos-carrusel.component';







@NgModule({
  declarations: [
    EditAfiliadosComponent, 
    FormAfiliadosComponent, 
    ListAfiliadosComponent, 
    ContDashboardComponent, 
    EditEventsComponent, 
    FormEventsComponent, 
    ListEventsComponent, 
    EditHotelComponent, 
    FormHotelComponent, 
    ListHotelComponent, 
    PanelComponent, 
    EditRestaurantComponent, 
    FormRestaurantComponent, 
    ListRestaurantComponent, 
    EditSitiosComponent, 
    FormSitiosComponent, 
    ListSitiosComponent, ListEmpresasComponent, ListPhotosCarruselComponent, FormPhotosCarruselComponent,
    
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
