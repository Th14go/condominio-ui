import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'condominios', loadChildren: () =>
      import('./recursos/condominio/condominio.module')
      .then(m => m.CondominioModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
