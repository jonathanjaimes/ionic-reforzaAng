import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerezosoRoutingModule } from './perezoso-routing.module';
import { PerezosoComponent } from './perezoso.component';


@NgModule({
  declarations: [
    PerezosoComponent
  ],
  imports: [
    CommonModule,
    PerezosoRoutingModule
  ]
})
export class PerezosoModule { }
