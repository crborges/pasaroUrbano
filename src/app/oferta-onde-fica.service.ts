import {Oferta} from './shared/oferta.model'

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {URL_API_ONDE_FICA} from './app.api'
import { OfertaOndeFica } from './shared/oferta.onde-fica.model';

@Injectable({
  providedIn: 'root'
})
export class OfertaOndeFicaService {

 
  constructor(private http: HttpClient){   }
  httpOptions={ headers: new HttpHeaders({'contenType':'aplication/json'})}

  //get all onde fica
  public getOfertasOndeFica(): Observable<OfertaOndeFica[]>{
      return this.http.get<OfertaOndeFica[]>(URL_API_ONDE_FICA).pipe(retry(2),catchError(this.handleError))
  }
  //get onde fica by id
  public getOfertaOndeFicaById(id: String): Observable<OfertaOndeFica>{
      return this.http.get<OfertaOndeFica>(URL_API_ONDE_FICA+'/'+id).pipe(retry(2),catchError(this.handleError))
  }
  //save a oferta onde fica
  public saveOfertaOndeFica(ofertaOndeFica :OfertaOndeFica): Observable<OfertaOndeFica>{
      return this.http.post<OfertaOndeFica>(URL_API_ONDE_FICA,JSON.stringify(ofertaOndeFica),this.httpOptions).pipe(retry(2),catchError(this.handleError))
  }
  //atualiza oferta onde fica
  public updateOfertaOndeFica(ofertaOndeFica :OfertaOndeFica): Observable<OfertaOndeFica>{
      return this.http.put<OfertaOndeFica>(URL_API_ONDE_FICA+'/'+ofertaOndeFica.id,JSON.stringify(ofertaOndeFica),this.httpOptions).pipe(retry(1),catchError(this.handleError))
   }
   //deleta uma oferta onde fica
  public deleteOfertaOndeFica(ofertaOndeFica :OfertaOndeFica): Observable<OfertaOndeFica>{
      return this.http.delete<OfertaOndeFica>(URL_API_ONDE_FICA + '/' + ofertaOndeFica.id, this.httpOptions).pipe(retry(1),catchError(this.handleError))
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
