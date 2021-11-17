import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';

import {InputTextModule } from 'primeng/inputtext';
import {CardModule } from 'primeng/card';
import {ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';

@NgModule({

  exports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    AccordionModule,
    TableModule
  ]
})
export class PrimengModule { }
