import { Component, OnInit } from '@angular/core';
import {Comentario} from "../../interfaces/Comentario";
import {ComentarioService} from "../../services/comentario.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [];

  constructor( private comentarioService: ComentarioService,
               private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this.comentarioService.getListComentarios().subscribe(
      data => {
        this.listComentarios = data;
      }, error => {
        this.toastr.error('Opss, Ocurrios un error', '¡Error !');
        console.log(error);
      })
  }

  eliminarComentario( id: any ){
    this.comentarioService.deleteComentario(id).subscribe( data => {
      this.getComentarios();
      this.toastr.error('El comentario fue eliminado con exito', '¡Registro eliminado!');
    }, error => {
      console.log(error);
    } )
  }

}
