import {Oferta} from './shared/oferta.model'
import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse ,HttpResponse} from '@angular/common/http';
import {Observable,throwError } from 'rxjs';
import {retry, catchError } from 'rxjs/operators';
import {URL_API_OFERTA} from './app.api'
import { map } from 'rxjs/operators';

@Injectable()
export class OfertasService {
   


    constructor(private http: HttpClient){   }
    httpOptions={ headers: new HttpHeaders({'contenType':'aplication/json'})}

    //get all ofertas
    public getOfertas(): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(URL_API_OFERTA).pipe(retry(2),catchError(this.handleError))
    }
    //get destaques
    public getDestaques(): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(URL_API_OFERTA+'?destaque=true').pipe(retry(2),catchError(this.handleError))
    }

    //get by categoria
    public getByCategoria(categoria : string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(URL_API_OFERTA+'?categoria='+categoria).pipe(retry(2),catchError(this.handleError))
    }

    //get oferta by id
    public getOfertaById(id: String): Observable<Oferta>{
        return this.http.get<Oferta>(URL_API_OFERTA+'/'+id).pipe(retry(2),catchError(this.handleError))
    }
    //save a car
    public saveOferta(oferta :Oferta): Observable<Oferta>{
        return this.http.post<Oferta>(URL_API_OFERTA,JSON.stringify(oferta),this.httpOptions).pipe(retry(2),catchError(this.handleError))
    }
    //atualiza oferta
    public updateOferta(oferta: Oferta): Observable<Oferta>{
        return this.http.put<Oferta>(URL_API_OFERTA+'/'+oferta.id,JSON.stringify(oferta),this.httpOptions).pipe(retry(1),catchError(this.handleError))
     }
     //deleta uma oferta
    public deleteOferta(oferta: Oferta): Observable<Oferta>{
        return this.http.delete<Oferta>(URL_API_OFERTA + '/' + oferta.id, this.httpOptions).pipe(retry(1),catchError(this.handleError))
    }


    public pesquisaOferta(termo: string): Observable<Oferta[]>{
      return this.http.get<Oferta[]>(URL_API_OFERTA+'?descricao_oferta_like='+termo)
      //.map( (resposta: any) => resposta.json())
      .pipe(retry(10),catchError(this.handleError))
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