import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OfertasService} from '../../ofertas.service'
import {Oferta} from '../../shared/oferta.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pas-ofetas-new',
  templateUrl: './ofetas-new.component.html',
  styleUrls: ['./ofetas-new.component.css']
})

export class OfetasNewComponent implements OnInit {
  

  oferta = {} as Oferta
  //ofertas= Oferta[]
  
  constructor(private router: Router, private ofertaService: OfertasService) { }


  public createOferta(): void {
   /* console.log('init save')
      this.ofertaService.saveOferta(this.oferta).subscribe(() => {
        this.cleanForm(form);
        //this.router.navigate(['/products'])
      });*/
      this.router.navigate(["/oferta-list"]);
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    form.resetForm();
    this.oferta = {} as Oferta;
  }

  ngOnInit(): void {  }

}
