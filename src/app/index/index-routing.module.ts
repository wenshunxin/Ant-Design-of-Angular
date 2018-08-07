import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthRouteService } from "../core/service/auth-route.service";
const routes: Routes = [
  {
    path:"",
    component:IndexComponent,
    canActivateChild:[AuthRouteService],
    children:[
      {
        path:"table",
        loadChildren:"./table/table.module#TableModule",
      },
      {
        path:"form",
        loadChildren:"./form/form.module#FormModule"
      },
      {
        path:"progress",
        loadChildren:"./progress/progress.module#ProgressModule"
      },
      {
        path:"",
        redirectTo:"form",
        pathMatch:"full"
      },
      {
        path:"**",
        redirectTo:"form",
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
