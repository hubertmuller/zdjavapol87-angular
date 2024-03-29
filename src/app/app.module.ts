import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { FormularzComponent } from './formularz/formularz.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PotwierdzenieComponent } from './potwierdzenie/potwierdzenie.component';
import { EdytujComponent } from './edytuj/edytuj.component';
import { UsunComponent } from './usun/usun.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    NaglowekComponent,
    FormularzComponent,
    PotwierdzenieComponent,
    EdytujComponent,
    UsunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
