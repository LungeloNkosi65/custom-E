import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-c',
  template: `
  <button (click)="handleClick()">{{label}}</button>  
  <p>
     {{message}}
    </p>
  `,
  styles: [
    `button{
      border: solid 3px;
      padding: 8px 10px;
      background:#bada55;
      font-size: 20px;
    }`
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonCComponent implements OnInit {
@Input() label='Custom Element';
@Output() action=new EventEmitter<number>();
@Input() message:string;
private clicksCount=0;
  constructor() { }
  handleClick(){
    this.clicksCount++;
    this.action.emit(this.clicksCount);
    this.message='Hellow world lets begin'
  }

  ngOnInit(): void {
  }

}
