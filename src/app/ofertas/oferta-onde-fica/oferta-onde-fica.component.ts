import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { OfertaOndeFica } from 'src/app/shared/oferta.onde-fica.model';
import {OfertaOndeFicaService} from '../../oferta-onde-fica.service'

@Component({
  selector: 'pas-oferta-onde-fica',
  templateUrl: './oferta-onde-fica.component.html',
  styleUrls: ['./oferta-onde-fica.component.css']
})
export class OfertaOndeFicaComponent implements OnInit {
 
  
  public ofertaOndeFica ={} as OfertaOndeFica
  
  constructor(
    private route :ActivatedRoute,
    private ofertaOndeFicaService: OfertaOndeFicaService
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe ((parammetros: Params) =>{
      this.ofertaOndeFicaService.getOfertaOndeFicaById(parammetros.id).subscribe((ofertaOndeFica) => {
        this.ofertaOndeFica = ofertaOndeFica;
      })
    })
  }
}