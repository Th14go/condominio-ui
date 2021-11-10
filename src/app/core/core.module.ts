import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng.module';

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
    providers: [],
    exports: [
        LayoutComponent
    ]
})
export class CoreModule {}