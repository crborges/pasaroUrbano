import {Component, OnInit,ViewChild} from '@angular/core';
import {OrdemCompraService } from '../ordem-compra.service'
import {Pedido} from '../shared/pedido.model'
import {ItemCarrinho} from '../shared/item-carrinho.model'
import {FormControl, FormGroup, NgForm,Validators} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import{CarrinhoService} from '../carrinho.service'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public IdPedidoCompra: number=0
  public itensCarrinho: ItemCarrinho[]= []

  public formulario : FormGroup = new FormGroup({
    'endereco':  new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(120)]),
    'numero': new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null,[Validators.required])
  })

  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { 
    
  }

  ngOnInit() {
    this.itensCarrinho= this.carrinhoService.exibirItens()
    //console.log('array de itens do carrinho')
    console.log(this.itensCarrinho) 
  }

  public confirmarCompra(): void {
    if(this.formulario.status === 'INVALID'){
      this.formulario.get('endereco')?.markAsTouched()
      this.formulario.get('numero')?.markAsTouched()
      this.formulario.get('complemento')?.markAsTouched()
      this.formulario.get('formaPagamento')?.markAsTouched()
    }
    else{


      if(this.carrinhoService.exibirItens().length===0){
        alert('Você tem que ter itens no carrinho para fazer um pedido')
      }else{
        console.log('poste carrinho')
        let pedido: Pedido = new Pedido();
        pedido.endereco = this.formulario.value.endereco
        pedido.numero = this.formulario.value.numero
        pedido.complemento = this.formulario.value.complemento
        pedido.formaPagamento = this.formulario.value.formaPagamento
        pedido.itensCarrinho=this.carrinhoService.exibirItens()
        pedido.valor=this.carrinhoService.totalCarrinhoCompra()
        
        this.ordemCompraService.efetivaCompra(pedido).subscribe(pedido=>{
          this.IdPedidoCompra= pedido.id
          console.log(this.IdPedidoCompra)
          this.carrinhoService.limpaCarrinho()
        })

        





      }



    }
  }




  public adicionar(itemCarrinho: ItemCarrinho): void{ this.carrinhoService.adicionar(itemCarrinho); }   

  public retirar(itemCarrinho: ItemCarrinho): void{ this.carrinhoService.retirar(itemCarrinho); } 
   

}