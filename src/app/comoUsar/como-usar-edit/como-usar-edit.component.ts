import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaComoUsarService } from 'src/app/oferta-como-usar.service';
import { OfertaComoUsar } from 'src/app/shared/oferta.como-usar.model';

@Component({
  selector: 'pas-como-usar-edit',
  templateUrl: './como-usar-edit.component.html',
  styleUrls: ['./como-usar-edit.component.css']
})
export class ComoUsarEditComponent implements OnInit {

  public ofertaComoUsar = {} as OfertaComoUsar

  constructor(
    private ofertaComoUsarService: OfertaComoUsarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get("id");
    this.ofertaComoUsarService.getOfertaComoUsarById(''+id).subscribe((ofertaComoUsar) => {
      this.ofertaComoUsar = ofertaComoUsar;
    });
  }


  public atualizaOfertaComoUsar(): void {
    this.ofertaComoUsarService.updateOfertaComoUsar(this.ofertaComoUsar).subscribe(() => {
      //this.cleanForm(form);
      //this.router.navigate(['/products'])
    });

      this.router.navigate(["/como-usar-list"]);
  }


      // Chama o serviço para obtém todos os carros
      getOferta() {
        const id = this.route.snapshot.paramMap.get("id");
        this.ofertaComoUsarService.getOfertaComoUsarById(''+id).subscribe((ofertaComoUsar: OfertaComoUsar) => {
          this.ofertaComoUsar = ofertaComoUsar;
        });
      }

}
