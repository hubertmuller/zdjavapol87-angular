import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { NaglowekComponent } from './naglowek/naglowek.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    NaglowekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
