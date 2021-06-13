import { ItemCarrinho } from "./item-carrinho.model"

export class Pedido{
    public id: number =0
    public endereco : string = ''
    public numero : string = ''
    public complemento : string = ''
    public formaPagamento : string = ''
    public itensCarrinho : ItemCarrinho[] =[]
    public valor: number =0
}