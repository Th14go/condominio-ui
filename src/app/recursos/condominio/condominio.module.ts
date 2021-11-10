import { NgModule } from '@angular/core';

import { PrimengModule } from '../../primeng.module';
import { CondominioCadastroComponent } from './condominio-cadastro/condominio-cadastro.component';
import { CondominioRountingModule } from './condominio.routing';
import { CondominiosListaComponent } from './condominios-lista/condominios-lista.component';

@NgModule({
  declarations: [
    CondominioCadastroComponent,
    CondominiosListaComponent
  ],
  imports: [
    PrimengModule,
    CondominioRountingModule,
  ],

})
export class CondominioModule { }
