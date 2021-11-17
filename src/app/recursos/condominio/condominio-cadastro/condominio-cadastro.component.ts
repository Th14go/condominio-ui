import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Condominio } from 'src/app/core/models/condominio.model';
import { CondominiosService } from '../condominios.service';

@Component({
  selector: 'app-condominio-cadastro',
  templateUrl: './condominio-cadastro.component.html',
  styleUrls: ['./condominio-cadastro.component.css']
})
export class CondominioCadastroComponent implements OnInit {

  condominio = new Condominio();
  constructor(
    private condService: CondominiosService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(form: NgForm){
  console.log(this.condominio);
  this.condService.salvar(this.condominio)
  .then((obj => {
    this.messageService.add({
      severity: 'success',
      summary: 'Condomínio',
      detail: `Condomínio adicionado com sucesso`
    });
    this.router.navigate(['/condominios']);
  }))
  }
}
