import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GuarloginGuard } from './guards/guarlogin.guard';
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
import { IniciosesionComponent } from './pageweb/iniciosesion/iniciosesion.component';
import { LugaresComponent } from './pageweb/lugares/lugares.component';
import { MasSitiosComponent } from './pageweb/mas-sitios/mas-sitios.component';
import { MenuComponent } from './pageweb/menu/menu.component';
import { PagNofoundComponent } from './pageweb/pag-nofound/pag-nofound.component';
import { PaginaPrincipalComponent } from './pageweb/pagina-principal/pagina-principal.component';
import { PiePaginaComponent } from './pageweb/pie-pagina/pie-pagina.component';
import { RestaurantesComponent } from './pageweb/restaurantes/restaurantes.component';
import { RotondaComponent } from './pageweb/rotonda/rotonda.component';
import { RutasCamionComponent } from './pageweb/rutas-camion/rutas-camion.component';
import { SanjuanComponent } from './pageweb/sanjuan/sanjuan.component';
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
    IniciosesionComponent,
    LugaresComponent,
    MasSitiosComponent,
    MenuComponent,
    PagNofoundComponent,
    PaginaPrincipalComponent,
    PiePaginaComponent,
    RestaurantesComponent,
    RotondaComponent,
    RutasCamionComponent,
    SanjuanComponent,
    TeatroComponent,
    LoginAfiliadoComponent,
    RegistroComponent,
    EventosComponent,
    
    
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
  providers: [GuarloginGuard],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
