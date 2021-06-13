import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'pas-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input('idPedidoCompra') public idPedidoCompra : number =0


  constructor() { }

  ngOnInit(): void {
  }

}
