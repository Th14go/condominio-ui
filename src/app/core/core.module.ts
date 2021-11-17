import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

import { PrimengModule } from '../primeng.module';

import { CondominiosService } from '../recursos/condominio/condominios.service';

import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './layout/pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
    declarations: [
        NavbarComponent,
        LayoutComponent,
        PaginaNaoEncontradaComponent
    ],
    imports: [
        PrimengModule,
        RouterModule
    ],
    providers: [
        MessageService,
        CondominiosService
    ],
    exports: [
        LayoutComponent
    ]
})
export class CoreModule {}