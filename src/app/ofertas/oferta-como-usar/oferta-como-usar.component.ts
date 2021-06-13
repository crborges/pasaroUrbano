import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { OfertaComoUsarService } from '../../oferta-como-usar.service'
import { OfertaComoUsar } from 'src/app/shared/oferta.como-usar.model';


@Component({
  selector: 'pas-oferta-como-usar',
  templateUrl: './oferta-como-usar.component.html',
  styleUrls: ['./oferta-como-usar.component.css']
})
export class OfertaComoUsarComponent implements OnInit {

  public ofertaComoUsar ={} as OfertaComoUsar
  
  constructor(
    private route :ActivatedRoute,
    private ofertaComoUsarService: OfertaComoUsarService
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe ((parammetros: Params) =>{
      this.ofertaComoUsarService.getOfertaComoUsarById(parammetros.id).subscribe((ofertaComoUsar) => {
        this.ofertaComoUsar = ofertaComoUsar;
      })
    })
  }
 

}
