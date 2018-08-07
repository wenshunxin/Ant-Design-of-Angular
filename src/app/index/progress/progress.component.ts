import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  percent:number=0;
  constructor() { }

  ngOnInit() {
    let timer = setInterval(()=>{
      this.percent+=10;
      if(this.percent == 110){
        clearInterval(timer);
      }
    },1000-(this.percent*10));
    // if(this.percent == 100){
    //   clearInterval(timer);
    // }
  }
}
