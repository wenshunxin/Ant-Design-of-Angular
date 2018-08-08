import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "../../../core/service/common.service";
import { data } from "../../../mock/asider";
@Component({
  selector: 'wsx-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // isCollapsed:boolean = false;
  @Input() isCollapsed:boolean;
  @Output() tabs = new EventEmitter<any>();

  dataList=data.asider;
  constructor(
    private router : Router ,
    public cs:CommonService
  ) {}

  ngAfterViewInit():void{
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("1");
    console.log(this.router.url)
  }
  ngOnInit() {
    
    this.dataList.forEach(item=>{
      item["isOpen"] = false;
      item.children.forEach(item_1=>{
        if((item_1 && item_1.path) == this.router.url){
          item["isOpen"] = true;
          item["isSelect"] =true;
        }
      })
    })
    this.tabs.emit(this.router.url);
  }
  jump(path:string):void{
    this.router.navigate([path]);
    this.tabs.emit(path);
  }
  openHandler(name:string):void{
    this.dataList.forEach((value) => {
      value.name === name ? value["isOpen"] = true : value["isOpen"] = false;
    });
  }
}
