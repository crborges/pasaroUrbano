import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';
import { Oferta } from '../../shared/oferta.model';
import {Observable, Subscription} from 'rxjs'
import { interval } from 'rxjs'
import{CarrinhoService} from '../../carrinho.service'

@Component({
  selector: 'pas-oferta-ver',
  templateUrl: './oferta-ver.component.html',
  styleUrls: ['./oferta-ver.component.css']
})
export class OfertaVerComponent implements OnInit, OnDestroy {

  //private tempoObservableSubscription: Subscription = new Subscription
  //private meuObservableTesteSubscription: Subscription = new Subscription

  public oferta = {} as Oferta

  constructor(
    private ofertaService: OfertasService,
    private carrinhoService : CarrinhoService,
    private route: ActivatedRoute,
    //public oferta: Oferta
  ) {}




  ngOnInit(): void {
    //recuperar um parametro por snapshot
    //const id = this.route.snapshot.params["id"];

    this.route.params.subscribe((parametros: Params)=>{
      this.ofertaService.getOfertaById(parametros.id).subscribe((oferta) => {      this.oferta = oferta;    });
      console.log('array de itens do carrinho ') 
      console.log(this.carrinhoService.exibirItens())

    })


    //
    
    //testes de subscribe
    /*
    //criando uma chamada de programação reativa no angular
    this.route.params.subscribe(
      (parametro:any )=>{console.log(parametro)}, //o que eu vou fazer com os dados que recebi
      (erro:any)=>{console.log(erro)}, // o que eu vou fazer em caso de erro
      ()=>{console.log('o processamento dado como concluído')}// o que sera feito quand o processamento for concluído
    )
    
   //recuperar um parametro por subscribe
    this.route.params.subscribe((parametro: any)=>{
      console.log("recuperei numa função de subscribe o valor "+parametro.id)
    })
    console.log('recuperei'+id)

    //criando um observable de interval, ele vai incrementano um numero de tempo em tempo até o infinito ele vai ficar jogando no console um inteiro até o infinito
    const tempo = interval(2000)
    tempo.subscribe((intervalo: number)=>{
      console.log(intervalo)
    });
    

    //criando um observable basico e se increvendo nele

    //observable (observavel)
    let meuObservableTeste =  new Observable(subscriber => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      //subscriber.error('erro apos o processamento')
      subscriber.complete()
      subscriber.next(4)
    })
    console.log('me inscrevendo')
    
    //observable (obsevador)
    this.tempoObservableSubscription = meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado+10),
      (erro: string)=> console.log(erro),
      ()=> console.log('stream concluida')
    )
    console.log('Fim do observable')

    





  //criando um observable que gera um memory leak e que vai ser encerrado
  const tempo = interval(2000)

   this.tempoObservableSubscription = tempo.subscribe((intervalo: number)=>{
    console.log(intervalo)
  });
*/


 
    

  }




  public AdicionarItemCarrinho(): void{
    console.log('Adicionado ao carinho ')
    this.carrinhoService.incluirCarrinho(this.oferta);
    console.log('meu carrinho tem ')
    console.log(this.carrinhoService.exibirItens())
    console.log('meu carrinho acabou ')
  }

  
  ngOnDestroy(): void {
    //usa o hook do fim do ciclo de vida do angular para tirar o subscribe da memmoria
    //this.meuObservableTesteSubscription.unsubscribe()
    //this.tempoObservableSubscription.unsubscribe()
  }

 }