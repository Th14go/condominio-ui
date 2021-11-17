import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Condominio } from 'src/app/core/models/condominio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CondominiosService {

  condominioUrl!: string;
  constructor(
    private http: HttpClient
  ) {
    this.condominioUrl = `${environment.apiUrl}/condominio`;
   }
 
  listar():Promise<any> {
    return this.http.get(`${this.condominioUrl}`)
    .toPromise()
    .then(response => response);
  }

  salvar(obj: Condominio): Promise<Condominio>{
    return this.http.post<Condominio>(
      this.condominioUrl, obj)
      .toPromise();
  }
}
