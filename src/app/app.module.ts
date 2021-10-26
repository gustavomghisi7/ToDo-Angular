import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';
import { CadastrarTarefaComponent } from './tarefas/cadastrar';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
