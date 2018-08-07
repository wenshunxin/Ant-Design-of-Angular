import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'; // 由此模块给其他模块提供common服务
import {FormsModule} from '@angular/forms';  // 表单基础依赖
import {ReactiveFormsModule} from '@angular/forms'; // 响应式表单依赖
import {NgZorroAntdModule} from 'ng-zorro-antd';


// 注册ng-zorro语言包
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


import { HeaderComponent } from "./component/header/header.component";
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { WsxUploadComponent } from "./component/wsx-upload";
// 常量

const components = [HeaderComponent,SidebarComponent,WsxUploadComponent];
const directives = [];
const pipes = [];


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [...components, directives, ...pipes],
  providers: [],
  exports: [ReactiveFormsModule, CommonModule, FormsModule, NgZorroAntdModule, ...components, directives, ...pipes]
})
export class SharedModule {
}

