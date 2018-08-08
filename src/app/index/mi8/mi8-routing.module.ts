import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MI8Component } from './mi8.component';

const routes: Routes = [
  {
    path:"",
    component:MI8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MI8RoutingModule { }
