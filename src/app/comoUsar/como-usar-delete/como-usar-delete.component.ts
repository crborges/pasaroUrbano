import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaComoUsarService } from 'src/app/oferta-como-usar.service';
import { OfertaComoUsar } from 'src/app/shared/oferta.como-usar.model';

@Component({
  selector: 'pas-como-usar-delete',
  templateUrl: './como-usar-delete.component.html',
  styleUrls: ['./como-usar-delete.component.css']
})
export class ComoUsarDeleteComponent implements OnInit {

  public ofertaComoUsar = {} as OfertaComoUsar

  constructor(
    private ofertaComoUsarService: OfertaComoUsarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get("id");
    this.ofertaComoUsarService.deleteOfertaComoUsar(""+id).subscribe((ofertaComoUsar) => {
      this.ofertaComoUsar = ofertaComoUsar;
    });
    
    this.router.navigate(["/como-usar-list"]);
  }


  /*
  public atualizaOfertaComoUsar(): void {
    this.ofertaComoUsarService.updateOfertaComoUsar(this.ofertaComoUsar).subscribe(() => {
    });

      this.router.navigate(["/como-usar-list"]);
  }


      getOferta() {
        const id = this.route.snapshot.paramMap.get("id");
        this.ofertaComoUsarService.getOfertaComoUsarById(''+id).subscribe((ofertaComoUsar: OfertaComoUsar) => {
          this.ofertaComoUsar = ofertaComoUsar;
        });
      }*/

}
