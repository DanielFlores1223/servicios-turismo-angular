import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GuarloginGuard } from './guards/guarlogin.guard';
import { GuaradminGuard } from './guards/guaradmin.guard';
import { GuarafiliGuard } from './guards/guarafili.guard';
import { GuarpageWebGuard } from './guards/guarpage-web.guard';
//import { UseradminService } from './services/useradmin.service';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentsadmin/navigation/navigation.component';
import { PhotoFormComponent } from './componentsadmin/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './componentsadmin/photo-preview/photo-preview.component';
import { PhotoListComponent } from './componentsadmin/photo-list/photo-list.component';
import { CatedralComponent } from './pageweb/catedral/catedral.component';
import { CentrohistoricoComponent } from './pageweb/centrohistorico/centrohistorico.component';
import { HotelesComponent } from './pageweb/hoteles/hoteles.component';
import { LugaresComponent } from './pageweb/lugares/lugares.component';
import { MasSitiosComponent } from './pageweb/mas-sitios/mas-sitios.component';
import { MenuComponent } from './pageweb/menu/menu.component';
import { PaginaPrincipalComponent } from './pageweb/pagina-principal/pagina-principal.component';
import { PiePaginaComponent } from './pageweb/pie-pagina/pie-pagina.component';
import { RestaurantesComponent } from './pageweb/restaurantes/restaurantes.component';
import { RotondaComponent } from './pageweb/rotonda/rotonda.component';
import { RutasCamionComponent } from './pageweb/rutas-camion/rutas-camion.component';
import { TeatroComponent } from './pageweb/teatro/teatro.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdminModule } from './componentsadmin/admin.module';
import { LoginAfiliadoComponent } from './pageweb/login-afiliado/login-afiliado.component';
import { RegistroComponent } from './pageweb/registro/registro.component';
import { AdminRoutingModule } from './componentsadmin/admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EventosComponent } from './pageweb/eventos/eventos.component';
import { EmpreaModule } from './componetsafil/emprea.module';
import { EmpreaRoutingModule } from './componetsafil/emprea-routing.module';
import { FormAdminComponent } from '../../src/app/componentsadmin/administradores/form-admin/form-admin.component';
import { EditAdminComponent } from '../../src/app/componentsadmin/administradores/edit-admin/edit-admin.component';
import { ListAdminComponent } from '../../src/app/componentsadmin/administradores/list-admin/list-admin.component';
import { ComerciosComponent } from './pageweb/comercios/comercios.component';
//import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    CatedralComponent,
    CentrohistoricoComponent,
    HotelesComponent,
    LugaresComponent,
    MasSitiosComponent,
    MenuComponent,
    PaginaPrincipalComponent,
    PiePaginaComponent,
    RestaurantesComponent,
    RotondaComponent,
    RutasCamionComponent,
    TeatroComponent,
    LoginAfiliadoComponent,
    RegistroComponent,
    EventosComponent,
    FormAdminComponent,
    EditAdminComponent,
    ListAdminComponent,
    ComerciosComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    EmpreaModule,
    EmpreaRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    
    
    

  ],
  providers: [GuarloginGuard, GuaradminGuard, GuarafiliGuard, GuarpageWebGuard],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
