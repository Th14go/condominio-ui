import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondominioCadastroComponent } from './condominio-cadastro/condominio-cadastro.component';

import { CondominiosListaComponent } from './condominios-lista/condominios-lista.component';

const routes: Routes = [

  {
  path: '', component: CondominiosListaComponent,
  },
  {
    path: 'novo', component: CondominioCadastroComponent,
  },
  {
    path: ':id', component: CondominioCadastroComponent,

},
  ];
@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CondominioRountingModule { }

