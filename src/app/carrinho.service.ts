import {Carrinho} from './shared/carrinho.model'
import {ItemCarrinho} from './shared/item-carrinho.model'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,retry, catchError } from 'rxjs/operators';
import {URL_API_CARRINHO} from './app.api'
import { Oferta } from './shared/oferta.model';

@Injectable({   providedIn: 'root'})
export class CarrinhoService {
  public itens: ItemCarrinho[]=[]

  constructor(private http: HttpClient){   }
  httpOptions={ headers: new HttpHeaders({'contenType':'aplication/json'})}


  public exibirItens(): ItemCarrinho[]{
    return this.itens;
  }




  
  public incluirCarrinho(oferta : Oferta): void{
    let intemCarrinho = new ItemCarrinho()
    intemCarrinho.id=oferta.id
    intemCarrinho.img=oferta.imagens[0].url
    intemCarrinho.titulo=oferta.titulo
    intemCarrinho.descricao_item=oferta.descricao_oferta
    intemCarrinho.valor=oferta.valor
    intemCarrinho.quantidade=1
      //verifica se item ja exsite no carrinho
       let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === intemCarrinho.id)
       if(itemCarrinhoEncontrado){
         itemCarrinhoEncontrado.quantidade += 1
       } else {
       this.itens.push(intemCarrinho)
       }
  }

  public totalCarrinhoCompra(): number {
    let total=0
    this.itens.map((item: ItemCarrinho)=>{
      total = total+(item.valor*item.quantidade)
    })
    return total
  }



  public adicionar(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if(itemCarrinhoEncontrado){ itemCarrinhoEncontrado.quantidade+=1}
  }

  public retirar(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if(itemCarrinhoEncontrado){ 
      itemCarrinhoEncontrado.quantidade-=1
      if(itemCarrinhoEncontrado.quantidade===0){  
          this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
      }
    }
  }

  public limpaCarrinho(): void{
    this.itens=[]
  }


  //get all carrinhos
  public getCarrinho(): Observable<Carrinho[]>{
      return this.http.get<Carrinho[]>(URL_API_CARRINHO).pipe(retry(2),catchError(this.handleError))
  }
  //get carrinho by id
  public getCarrinhoId(id: String): Observable<Carrinho>{
      return this.http.get<Carrinho>(URL_API_CARRINHO+'/'+id).pipe(retry(2),catchError(this.handleError))
  }

  //save a carrinho
  public saveCarrinho(carrinho :Carrinho): Observable<Carrinho>{
    return this.http.post<Carrinho>(URL_API_CARRINHO, carrinho).pipe(
      map((obj) => obj),catchError(this.handleError)
    )
  }

  //atualiza carrinho
  public updateOfertaComoUsar(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.put<Carrinho>(URL_API_CARRINHO+'/'+carrinho.id, carrinho).pipe(
      map((obj) => obj),catchError(this.handleError)
    )
   }
   //deleta um carrinho
  public deleteCarrinho(id: string): Observable<Carrinho>{
    return this.http.delete<Carrinho>(URL_API_CARRINHO+"/"+id).pipe(
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
