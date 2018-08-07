import { Component, OnInit,Input,Output } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "../../../core/service/common.service";
@Component({
  selector: 'wsx-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // isCollapsed:boolean = false;
  @Input() isCollapsed:boolean;
  dataList=[
      {
      name:"基础知识",
      icon:"setting",
      path:"",
      children:[
        {
          name:"表单",
          path:"/index/form"
        },
        {
          name:"表格",
          path:"/index/table"
        }
      ]
    },
    {
      name:"知识点_2",
      icon:"mail",
      path:"/index/form",
      children:[]
    },
    {
      name:"知识点",
      icon:"heart-o",
      path:"",
      children:[
        {
          name:"进度条",
          path:"/index/progress"
        }
      ]
    },
    {
      name:"知识点_1",
      icon:"mail",
      path:"/index/table",
      children:[]
    }
  ]
  constructor(
    private router : Router ,
    public cs:CommonService
  ) {}

  ngAfterViewInit():void{
    
  }
  ngOnInit() {
    this.dataList.forEach(item=>{
      item["isOpen"] = false;
      item.children.forEach(item_1=>{
        if((item_1 && item_1.path) == this.router.url){
          item["isOpen"] = true;
        }
      })
    })
  }
  jump(path:string):void{
    this.router.navigate([path])
  }
  openHandler(name:string):void{
    this.dataList.forEach((value) => {
      value.name === name ? value["isOpen"] = true : value["isOpen"] = false;
    });
  }
}
