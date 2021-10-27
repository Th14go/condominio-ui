import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';

import {InputTextModule } from 'primeng/inputtext';
import {CardModule } from 'primeng/card';
import {ButtonModule } from 'primeng/button';

@NgModule({

  exports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimengModule { }
