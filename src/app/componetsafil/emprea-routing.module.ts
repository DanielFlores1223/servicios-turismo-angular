import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuarloginGuard } from '../guards/guarlogin.guard';
import { GuarafiliGuard } from '../guards/guarafili.guard';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';

const routes: Routes = [
  {path: 'empresa/new',component: FormEmpresaComponent,canActivate :[GuarloginGuard, GuarafiliGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpreaRoutingModule { }
