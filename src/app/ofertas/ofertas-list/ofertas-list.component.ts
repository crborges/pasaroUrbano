import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../../ofertas.service'
import {Oferta} from '../../shared/oferta.model'

@Component({
  selector: 'pas-ofertas-list',
  templateUrl: './ofertas-list.component.html',
  styleUrls: ['./ofertas-list.component.css']
})
export class OfertasListComponent implements OnInit {

  public oferta = {} as Oferta
  public ofertas: Oferta[] =[]

  constructor(private ofertasService : OfertasService) { }

  ngOnInit(): void {
    this.getOfertas()
  }

    // Chama o serviço para obtém todos os carros
    getOfertas() {
      this.ofertasService.getOfertas().subscribe((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
    }




}
