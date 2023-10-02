import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './components/carte/carte.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCarteComponent } from './components/list-carte/list-carte.component';
@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    ListCarteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
