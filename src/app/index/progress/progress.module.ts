import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';
import { SharedModule } from "../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProgressRoutingModule
  ],
  declarations: [ProgressComponent]
})
export class ProgressModule { }
