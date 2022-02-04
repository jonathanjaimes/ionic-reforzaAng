import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivoRoutingModule } from './activo-routing.module';
import { ActivoComponent } from './activo.component';


@NgModule({
  declarations: [
    ActivoComponent
  ],
  imports: [
    CommonModule,
    ActivoRoutingModule
  ]
})
export class ActivoModule { }
