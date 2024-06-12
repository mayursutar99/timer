import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'timer';
  
  h:any;
  m:any;
  s:any;
  ms:any;
  constructor(){
    setInterval(()=>{
      this.loadAll()
    },10)
  }
  loadAll(){
    const timecal=new Date();
    this.h=timecal.getHours()
    this.m=timecal.getMinutes()
    this.s=timecal.getSeconds()
    this.ms=timecal.getMilliseconds()
  }
}
