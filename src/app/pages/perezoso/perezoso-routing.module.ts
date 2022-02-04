import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerezosoComponent } from './perezoso.component';

const routes: Routes = [
  {
    path: '',
    component: PerezosoComponent // esta es otra ruta hija
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerezosoRoutingModule { }
