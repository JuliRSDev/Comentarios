import { Component, OnInit } from '@angular/core';
import {NoticiaService} from "../../services/noticia.service";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  listNoticias: any[] = [];

  constructor( private noticiaService: NoticiaService) { }

  ngOnInit(): void {
  }

  buscarNoticias( parametros: any ) {

    this.noticiaService.getNoticias( parametros ).subscribe(
      data => {

      }, error => {
        console.log( error );
      }
    )
  }

}
