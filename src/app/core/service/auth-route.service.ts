import { Injectable } from '@angular/core';
import { CanActivate, //守卫，处理导航到某路由的情况。
  Router,
  ActivatedRouteSnapshot,  //
  RouterStateSnapshot, //
  CanActivateChild //守卫，处理导航到子路由的情况
  } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthRouteService {

  constructor() { }
  canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
    // console.log(route.url[0].path);
    return true;
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    // console.log(state.url)
    return true;
  }
}
