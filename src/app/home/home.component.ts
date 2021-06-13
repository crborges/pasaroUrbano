import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'pas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas :Oferta[] = []

 constructor(private ofertasService : OfertasService) {}

  ngOnInit(): void {
    
    /*
    this.ofertasService.getOfertas()
      .then(
        (ofertas:Oferta[])=>{ this.ofertas=ofertas }//deu certo
      )
      .catch(
        (param: any )=> {console.log(param)}          //deu erro
      )*/
  }

}
