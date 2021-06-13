import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'pas-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertasService : OfertasService) { }
  public ofertas: Oferta[] =[]



      ngOnInit(): void {    this.getOfertas() }


      // Chama o serviço para obter ofertas por categoria
      getOfertas() {
        this.ofertasService.getByCategoria('diversao').subscribe((ofertas: Oferta[]) => {
          this.ofertas = ofertas;
        });
      }

}