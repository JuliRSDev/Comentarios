import { Component, OnInit } from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  listNoticias: any[] = [];

  constructor( private noticiaService: NoticiaService) { }

  buscarNoticias( parametros: any ) {

    this.noticiaService.getNoticias( parametros ).subscribe(
      data => {
        this.listNoticias = data.articles;
      }, error => {
        console.log( error );
      }
    )
  }

}
