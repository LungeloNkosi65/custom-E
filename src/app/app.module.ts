import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';
import { ButtonCComponent } from './button-c/button-c.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ButtonCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents:[ButtonCComponent]
})
export class AppModule { 
  constructor(private injector:Injector){
    const customButton=createCustomElement(ButtonCComponent ,{injector});
    customElements.define('custom-button',customButton);
  }
  ngDoBootstrap(){}
}
