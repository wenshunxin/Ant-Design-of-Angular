import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteService } from "./core/service/auth-route.service"
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  {
    path:"login",
    loadChildren:"./login/login.module#LoginModule",
    canActivate:[ AuthRouteService ]
  },
  {
    path:"index",
    loadChildren:"./index/index.module#IndexModule",
    canActivate:[ AuthRouteService ]
  },
  {
    path:"index_1/:id",
    loadChildren:"./index/index.module#IndexModule",
    canActivate:[ AuthRouteService ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
