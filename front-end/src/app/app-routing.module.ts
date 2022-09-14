import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProcessosComponent } from './pages/cadastrar-processos/cadastrar-processos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarProcessosComponent } from './pages/listar-processos/listar-processos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'listarprocessos',
    component: ListarProcessosComponent,
  },
  {
    path: 'cadastrarprocessos',
    component: CadastrarProcessosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
