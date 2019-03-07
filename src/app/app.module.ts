import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { OutPutDATAComponent } from './out-put-data/out-put-data.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    OutPutDATAComponent
  ],
  imports: [
    BrowserModule , FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
