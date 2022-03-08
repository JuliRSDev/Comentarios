import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private httpClient: HttpClient) { }

  getNoticias( parametros: any ) {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais + '&category=' + parametros.categoria +
      '&apiKey=604f8605e7284b20858dd20175730f3b';
    return this.httpClient.get( URL );
  }
}
