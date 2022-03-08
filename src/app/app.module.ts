import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';
import { FormularioComponent } from './components/noticias/formulario/formulario.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListComentariosComponent,
    VerComentarioComponent,
    FormularioComponent,
    NoticiasComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
