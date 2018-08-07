import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //定义一个属性，作为组件之间的传递参数，也可以是一个对象或方法    
  profileInfo: any;
  constructor() { }
}
