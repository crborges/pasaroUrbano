
import {Pedido} from './shared/pedido.model'
import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse ,HttpResponse} from '@angular/common/http';
import {Observable,throwError } from 'rxjs';
import {retry, catchError } from 'rxjs/operators';
import {URL_API_PEDIDO} from './app.api'
import { map } from 'rxjs/operators';


@Injectable({   providedIn: 'root'})
export class OrdemCompraService {
   


constructor(private http: HttpClient){   }

httpOptions={ headers: new HttpHeaders({'Content-Type':'application/json'})}






  public efetivaCompra(pedido :Pedido): Observable<any> {
    
    console.log('Validações de efetivar compra')
    console.log(JSON.stringify(pedido))
    console.log('Enviando pedido')
    return this.http.post(URL_API_PEDIDO,JSON.stringify(pedido),this.httpOptions)
    

  }









   //get all ofertas
    public getPedidos(): Observable<Pedido[]>{
        return this.http.get<Pedido[]>(URL_API_PEDIDO).pipe(retry(2),catchError(this.handleError))
    }
    //get pedido by id
    public getPedidoById(id: String): Observable<Pedido>{
        return this.http.get<Pedido>(URL_API_PEDIDO+'/'+id).pipe(retry(2),catchError(this.handleError))
    }
    //save a pedido
    public savePedido(pedido :Pedido): Observable<Pedido>{
        return this.http.post<Pedido>(URL_API_PEDIDO,JSON.stringify(pedido),this.httpOptions).pipe(retry(2),catchError(this.handleError))
    }
    //atualiza pedido
    public updatePedido(pedido: Pedido): Observable<Pedido>{
        return this.http.put<Pedido>(URL_API_PEDIDO+'/'+pedido.id,JSON.stringify(pedido),this.httpOptions).pipe(retry(1),catchError(this.handleError))
     }
     //deleta um pedido
    public deletePedido(pedido: Pedido): Observable<Pedido>{
        return this.http.delete<Pedido>(URL_API_PEDIDO + '/' + pedido.id, this.httpOptions).pipe(retry(1),catchError(this.handleError))
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