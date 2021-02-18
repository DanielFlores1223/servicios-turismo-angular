import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmpreaRoutingModule } from './emprea-routing.module';
import { DashAfiliadoComponent } from './dash-afiliado/dash-afiliado.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { SolicitudAfiliadosComponent } from './solicitud-afiliados/solicitud-afiliados.component';



@NgModule({
  declarations: [
    DashAfiliadoComponent,
     FormEmpresaComponent,
     SolicitudAfiliadosComponent,
  ],
  imports: [
    CommonModule,
    EmpreaRoutingModule,
    FormsModule
  ],
  exports:[DashAfiliadoComponent, FormsModule]
})
export class EmpreaModule { }
