import { Component, OnInit } from '@angular/core';

import { CondominiosService } from '../condominios.service';

@Component({
  selector: 'app-condominios-lista',
  templateUrl: './condominios-lista.component.html',
  styleUrls: ['./condominios-lista.component.css']
})
export class CondominiosListaComponent implements OnInit {

  condominios = [];

  constructor(
    private condService: CondominiosService
  ) { }

  ngOnInit() {
     this.listaCondominios();
   }

  listaCondominios(){
    this.condService.listar()
    .then(obj => {
      this.condominios = obj;
    })
  }
}