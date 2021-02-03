import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpreaRoutingModule } from './emprea-routing.module';
import { DashAfiliadoComponent } from './dash-afiliado/dash-afiliado.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';



@NgModule({
  declarations: [
    DashAfiliadoComponent,
     FormEmpresaComponent,
  ],
  imports: [
    CommonModule,
    EmpreaRoutingModule
  ],
  exports:[DashAfiliadoComponent]
})
export class EmpreaModule { }
