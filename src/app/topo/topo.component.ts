import {Component,OnInit} from '@angular/core'

import {OfertasService} from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {observable, Observable, Subject} from 'rxjs'

@Component({
  selector: 'pas-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]> = new Observable<Oferta[]>()
  private subjectPesquisa: Subject<string> =new Subject<string>()
  //public ofertaRetorno: Oferta[] = [] 

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //cria o subject qwue vai ficar ouvindo
    this.ofertas = this.subjectPesquisa.pipe(
      
      debounceTime(1000),  //TEMPO DE ESPERA PARA CONECA A EXECUTAR
      distinctUntilChanged(),// so vai fazer pesquisa se for de um termo novo 
      catchError(error => {
        of({})
        throw new Error(error)
      }),//executado se der erro
      switchMap((termo: string)=> {
        if(termo.trim()===''){
          //se for uma string vazia retorna um observable de ofertas vazio
          of({})//se não tem valores no campo vai retornar um observable vazio
        }
          return this.ofertasService.pesquisaOferta(termo)
        
      })
    )

    //da subscribe nesse subject
    /*
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertaRetorno = ofertas
      console.log(ofertas)
    })
    */
  
  }
  public pesquisa(dados :string) :void{
     this.subjectPesquisa.next(dados)
  /*  
  this.ofertas= this.ofertasService.pesquisaOferta(dados)
    
    this.ofertas.subscribe(
      (ofertas : Oferta[])=> console.log(ofertas),
      (erro: any)=> console.log('Erro status: ',erro.status),
      ()=>console.log('fluxo de eventos conpleto!')
    )
  */    
  }


  public limpaPesquisa(): void{
    //alert('acessei')
    this.subjectPesquisa.next('')
  }
}
