import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'pas-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  public dataTeste : any = new Date()
  
  constructor(private ofertasService : OfertasService) { }
  public ofertas: Oferta[] =[]



      ngOnInit(): void {    this.getOfertas() }


      // Chama o serviço para obtém todos os carros
      getOfertas() {
        this.ofertasService.getByCategoria('restaurante').subscribe((ofertas: Oferta[]) => {
          this.ofertas = ofertas;
        });
      }

}