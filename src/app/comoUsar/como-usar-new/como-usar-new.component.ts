import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertaComoUsarService } from 'src/app/oferta-como-usar.service';
import { OfertaComoUsar } from 'src/app/shared/oferta.como-usar.model';

@Component({
  selector: 'pas-como-usar-new',
  templateUrl: './como-usar-new.component.html',
  styleUrls: ['./como-usar-new.component.css']
})
export class ComoUsarNewComponent implements OnInit {

  ofertaComoUsar = {} as OfertaComoUsar
  constructor(private router: Router, private ofertaComoUsarService: OfertaComoUsarService) { }

  public createOfertaComoUsar(): void {
    console.log(this.ofertaComoUsar);
       this.ofertaComoUsarService.saveOfertaComoUsar(this.ofertaComoUsar).subscribe(() => {
         //this.cleanForm(form);
         //this.router.navigate(['/products'])
       });
       this.router.navigate(["/como-usar-list"]);
   }
 
   // limpa o formulario
   cleanForm(form: NgForm) {
     form.resetForm();
     this.ofertaComoUsar = {} as OfertaComoUsar;
   }
 
   ngOnInit(): void {  }

}
