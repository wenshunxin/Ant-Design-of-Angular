import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { interval } from 'rxjs';
declare var $ :any;
declare var WebVideoCtrl: any;
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  percent:number=0;
  @ViewChild("musicPlayer") musicPlayer:ElementRef
  constructor(
    private element:ElementRef
  ) { }

  ngOnInit() {
    // console.log(WebVideoCtrl.I_CheckPluginVersion())
    if (-1 == WebVideoCtrl.I_CheckPluginInstall()) {
      alert("您还未安装过插件，双击开发包目录里的WebComponents.exe安装！");
      return;
    }else{
      console.log("支持")
      
    }
    WebVideoCtrl.I_InsertOBJECTPlugin(this.element.nativeElement.querySelector('#divPlugin'));
    // console.log(WebVideoCtrl)
    // console.log(this.element.nativeElement.querySelector('#divPlugin'))
  }
}
