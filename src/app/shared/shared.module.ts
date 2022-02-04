import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from '../routing.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
