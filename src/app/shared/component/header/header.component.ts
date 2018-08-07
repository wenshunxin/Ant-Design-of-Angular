import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "../../../core/service/common.service";
import { NzModalService } from "ng-zorro-antd";
@Component({
  selector: 'wsx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed:boolean=true;
  @Output() collapsed = new EventEmitter<any>();
  constructor(
    private router:Router,
    public cs:CommonService,
    private modalService:NzModalService
  ) { 
  }

  ngOnInit() {
  }

  jump(path:string):void{
    this.modalService.confirm({
      nzTitle  : '<i>提示</i>',
      nzContent: '<b>确定退出？</b>',
      nzOnOk   : () => this.router.navigate([path])
    });
  }

  toggleCollapsed():void{
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
  }
}
