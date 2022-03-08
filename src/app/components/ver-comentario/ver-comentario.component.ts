import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComentarioService} from "../../services/comentario.service";
import {Comentario} from "../../interfaces/Comentario";

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {

  id: number;
  comentario: Comentario | undefined;

  constructor( private  activatedRoute: ActivatedRoute,
               private comentarioService: ComentarioService ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario() {
    this.comentarioService.getComentario( this.id ).subscribe( data => {
      this.comentario = data;
    } )
  }

}
