import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comentario} from "../interfaces/Comentario";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  // Los servicios se usan para hacer las peticiones Http hacía nuestro backend, para reutilizar codigo, y
  // comunicación entre componentes

  private myAppUrl = 'https://localhost:44369/';
  private myApiUrl = 'api/comentario/';

  constructor( private  httpClient: HttpClient) { }

  getListComentarios(): Observable<any> {
    return this.httpClient.get( this.myAppUrl + this.myApiUrl );
  }

  deleteComentario( id: number ): Observable<any> {
    return this.httpClient.delete( this.myAppUrl + this.myApiUrl + id );
  }

  getComentario( id: number ): Observable<any> {
    return this.httpClient.get( this.myAppUrl + this.myApiUrl + id );
  }

  saveComentario( comentario: Comentario ): Observable<any> {
    return  this.httpClient.post( this.myAppUrl + this.myApiUrl, comentario );
  }

  updateComentario( id: number, comentario: Comentario ): Observable<any> {
    return this.httpClient.put( this.myAppUrl + this.myApiUrl + id, comentario );
  }
}
