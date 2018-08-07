import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { SharedModule } from "../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
