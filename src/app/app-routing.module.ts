import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ListComentariosComponent} from "./components/list-comentarios/list-comentarios.component";
import {
  AgregarEditarComentarioComponent
} from "./components/agregar-editar-comentario/agregar-editar-comentario.component";
import {VerComentarioComponent} from "./components/ver-comentario/ver-comentario.component";
import {FormularioComponent} from "./components/noticias/formulario/formulario.component";

const routes: Routes = [
  { path: '', component: ListComentariosComponent },
  { path: 'agregar', component: AgregarEditarComentarioComponent },
  { path: 'editar/:id', component: AgregarEditarComentarioComponent },
  { path: 'ver/:id', component: VerComentarioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
