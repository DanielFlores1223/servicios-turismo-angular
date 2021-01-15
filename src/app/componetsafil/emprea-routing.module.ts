import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuarloginGuard } from '../guards/guarlogin.guard';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';

const routes: Routes = [
  {path: 'empresa/new',component: FormEmpresaComponent,canActivate :[GuarloginGuard],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpreaRoutingModule { }
