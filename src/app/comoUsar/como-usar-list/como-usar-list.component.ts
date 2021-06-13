import { Component, OnInit } from '@angular/core';
import { OfertaComoUsarService } from 'src/app/oferta-como-usar.service';
import { OfertaComoUsar } from 'src/app/shared/oferta.como-usar.model';

@Component({
  selector: 'pas-como-usar-list',
  templateUrl: './como-usar-list.component.html',
  styleUrls: ['./como-usar-list.component.css']
})
export class ComoUsarListComponent implements OnInit {

  public ofertaComoUsar = {} as OfertaComoUsar
  public ofertasComoUsar: OfertaComoUsar[] =[]

  constructor(private ofertasComoUsarService : OfertaComoUsarService) { }

  ngOnInit(): void {
    this.getOfertas()
  }

    // Chama o serviço para obtém todos os carros
    getOfertas() {
      this.ofertasComoUsarService.getOfertasComoUsar().subscribe((ofertasComoUsar: OfertaComoUsar[]) => {
        this.ofertasComoUsar = ofertasComoUsar;
      });
    }

}
