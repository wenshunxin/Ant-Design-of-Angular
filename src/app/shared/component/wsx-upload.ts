import {
    Component,
    Input,
    Output,
    AfterViewInit,
    OnDestroy,
    EventEmitter,
    OnChanges,
    SimpleChanges
  } from '@angular/core';

  @Component({
    selector: 'wsx-upload',
    template: `
        <div class="clearfix">
            <nz-upload
            nzAction="https://jsonplaceholder.typicode.com/posts/"
            nzListType="picture-card"
            [(nzFileList)]="fileList"
            [nzShowButton]="fileList.length < 3"
            [nzPreview]="handlePreview">
                <i class="anticon anticon-plus"></i>
                <div class="ant-upload-text">Upload</div>
            </nz-upload>
            <nz-modal [nzVisible]="previewVisible" [nzContent]="modalContent" [nzFooter]="null" (nzOnCancel)="previewVisible=false">
            <ng-template #modalContent>
                <img [src]="previewImage" [ngStyle]="{ 'width': '100%' }" />
            </ng-template>
            </nz-modal>
        </div>
    `
  })

  export class WsxUploadComponent implements AfterViewInit, OnDestroy, OnChanges {
    fileList = [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ];
      previewImage = '';
      previewVisible = false;
    constructor(){

    }
    ngAfterViewInit() {
        // console.log("ngAfterViewInit")
    }
    ngOnChanges(){
        // console.log("ngOnChanges")
    }
    ngOnDestroy(){
        // console.log("ngOnDestroy")
    }
    handlePreview = (file) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
  }