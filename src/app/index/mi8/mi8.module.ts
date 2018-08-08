import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MI8RoutingModule } from './mi8-routing.module';
import { MI8Component } from "./mi8.component";
@NgModule({
  imports: [
    CommonModule,
    MI8RoutingModule
  ],
  declarations: [ MI8Component ]
})
export class MI8Module { }
