import {Component, Input, Output, AfterViewInit,OnDestroy,EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { data } from "../../mock/asider";
import { Router } from "@angular/router"
@Component({ 
    selector:"reuse-tab",
    template:
        `
        <nz-tabset [nzType]="'card'" [nzSelectedIndex]="index">
        <nz-tab *ngFor="let tab of tabs;let i = index;" [nzTitle]="titleTemplate" >
          <ng-template #titleTemplate>
            <div><span (click)="jump(tab.path)">{{ tab.name }}</span><i class="anticon anticon-close" (click)="closeTab(tab)" *ngIf="tabs.length !=1"></i></div>
          </ng-template>
        </nz-tab>
      </nz-tabset>
        `
})

export class ReuseTabComponent implements AfterViewInit, OnDestroy, OnChanges {
    index = 0;
    tabs = [  ];
    data = data.asider;
    @Input() tabsRouter:any;
    constructor(
      private router :Router
    ) { }
    ngAfterViewInit() {
        // console.log("ngAfterViewInit")
    }
    ngOnChanges(changes: SimpleChanges){
        if (changes['tabsRouter'] !== undefined) {
            this.data.forEach(item =>{
              if(item.path ==this.tabsRouter){
                this.tabs.push(item);
                this.index = this.tabs.length-1;
                this._return();
                this.jump(this.tabsRouter);
              }else{
                item.children.forEach(element => {
                  if(element.path == this.tabsRouter){
                    this.tabs.push(element);
                    this.index = this.tabs.length-1;
                    this._return();
                    this.jump(this.tabsRouter);
                  }
                });
              }
            })
          }
    }
    ngOnDestroy(){
        // console.log("ngOnDestroy")
    }
    closeTab(tab: string): void {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
        this.jump(this.tabs[this.tabs.length-1].path);
        this.tabs.forEach((item,index)=>{
          if(item.path == this.tabs[this.tabs.length-1].path){
             this.index = index;
          }
        })
      }
      jump(path:string):void{
        this.tabs.forEach((item,index)=>{
          if(item.path == path){
            this.index = index;
          }
        })
        this.router.navigate([path]);
      }
    
      _return(){
       this.tabs= Array.from(new Set(this.tabs))
      }
    
  }