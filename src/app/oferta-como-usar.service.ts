import {Oferta} from './shared/oferta.model'

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,retry, catchError } from 'rxjs/operators';
import {URL_API_COMO_USAR} from './app.api'
import { OfertaComoUsar } from './shared/oferta.como-usar.model';

@Injectable({   providedIn: 'root'})
export class OfertaComoUsarService {

  


  constructor(private http: HttpClient){   }
  httpOptions={ headers: new HttpHeaders({'contenType':'aplication/json'})}

  //get all como usar
  public getOfertasComoUsar(): Observable<OfertaComoUsar[]>{
      return this.http.get<OfertaComoUsar[]>(URL_API_COMO_USAR).pipe(retry(2),catchError(this.handleError))
  }
  //get como usar by id
  public getOfertaComoUsarById(id: String): Observable<OfertaComoUsar>{
      return this.http.get<OfertaComoUsar>(URL_API_COMO_USAR+'/'+id).pipe(retry(2),catchError(this.handleError))
  }

  //save a oferta como usar
  public saveOfertaComoUsar(ofertaComoUsar :OfertaComoUsar): Observable<OfertaComoUsar>{
    return this.http.post<OfertaComoUsar>(URL_API_COMO_USAR, ofertaComoUsar).pipe(
      map((obj) => obj),catchError(this.handleError)
    )
  }

  //atualiza oferta como usar
  public updateOfertaComoUsar(ofertaComoUsar: OfertaComoUsar): Observable<OfertaComoUsar>{
    console.log('inciando o update')
    return this.http.put<OfertaComoUsar>(URL_API_COMO_USAR+'/'+ofertaComoUsar.id, ofertaComoUsar).pipe(
      map((obj) => obj),catchError(this.handleError)
    )
   }
   //deleta uma oferta como usar
  public deleteOfertaComoUsar(id: string): Observable<OfertaComoUsar>{
    return this.http.delete<OfertaComoUsar>(URL_API_COMO_USAR+"/"+id).pipe(
      map((obj) => obj)
    );
  }


// Manipulação de erros
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
};

}
