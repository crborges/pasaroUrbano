import { Component, OnInit } from '@angular/core'
import {OfertasService} from '../../ofertas.service'
import {Oferta} from '../../shared/oferta.model'


@Component({
  selector: 'pas-ofertas-cli',
  templateUrl: './ofertas-cli.component.html',
  styleUrls: ['./ofertas-cli.component.css']
})
export class OfertasCliComponent implements OnInit {

  constructor(private ofertasService : OfertasService) { }
  public ofertas: Oferta[] =[]



  ngOnInit(): void {
    this.getOfertas()
  }


      // Chama o serviço para obtém todos os carros
      getOfertas() {
        this.ofertasService.getDestaques().subscribe((ofertas: Oferta[]) => {
          this.ofertas = ofertas;
        });
      }

}
