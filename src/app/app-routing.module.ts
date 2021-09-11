import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabelaComponent} from './tabela/tabela.component';
import {FormularzComponent} from './formularz/formularz.component';

const routes: Routes = [
  {
    path: 'lista', component: TabelaComponent
  },
  {
    path: 'dodaj', component: FormularzComponent
  },
  {
    path: '', redirectTo: '/dodaj', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
