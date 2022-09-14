import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProcessosComponent } from './pages/cadastrar-processos/cadastrar-processos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarProcessosComponent } from './pages/listar-processos/listar-processos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { EditarProcessosComponent } from './pages/editar-processos/editar-processos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProcessosComponent,
    NavbarComponent,
    ListarProcessosComponent,
    HomeComponent,
    EditarProcessosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
