import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isCollapsed:boolean;
  tabsRouter:string;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      // console.log(params)
    })
  }

  getCollapsed(value:boolean):void{
    this.isCollapsed = value;
  }

  getTabs(value:string):void{
    // console.log(value);
    this.tabsRouter=value;
  }
}
