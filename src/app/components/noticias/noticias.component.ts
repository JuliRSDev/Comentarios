import { Component, OnInit } from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  listNoticias: any[] = [];
  loading = false;

  constructor( private noticiaService: NoticiaService) { }

  buscarNoticias( parametros: any ) {

    this.loading = true;
    this.listNoticias = [];

    setTimeout( () => {
      this.noticiaService.getNoticias( parametros ).subscribe(
        data => {
          this.loading = false;
          this.listNoticias = data.articles;
        }, error => {
          console.log( error );
          this.loading = false;
        }
      )
    }, 1000 )

  }

}
